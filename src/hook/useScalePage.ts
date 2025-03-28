import React, { useEffect } from "react";
import _ from "lodash";

export default function useScalePage(ref: React.RefObject<HTMLDivElement>) {
  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
      ref.current.style.width = `1920px`;
      ref.current.style.height = `1080px`;
    }
    window.addEventListener("resize", resizeFunc);
    return () => {
      window.removeEventListener("resize", resizeFunc);
    };
  });
  // 根据浏览器大小推断缩放比例
  const getScale = (width = 1920, height = 1080) => {
    let ww = window.innerWidth / width;
    let wh = window.innerHeight / height;
    return ww < wh ? ww : wh;
  };

  const resizeFunc = _.throttle(function () {
    triggerScale(); // 动画缩放网页
  }, 100);

  // 大屏的适配
  function triggerScale() {
    if (ref.current) {
      ref.current.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
    }
  }
}
