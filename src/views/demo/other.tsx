import React, { memo } from "react";
import { useAppSelector, shallowEqualApp, useAppDispatch } from "../../store";
import { fetchBannerActions } from "../../store/modules/counter";
import { DatePicker } from "@/utils/antComponent";

const Other = memo((props: any) => {
  const { counte } = useAppSelector(
    (state: any) => ({
      counte: state.counter.count
    }),
    shallowEqualApp
  );
  const dispatch = useAppDispatch();
  function handleBtn() {
    // fetchBannerActions
    dispatch(fetchBannerActions(2));
  }

  return (
    <div className="Other">
      <h1>count: {counte}</h1>
      <button onClick={handleBtn}>点击+1</button>
      <DatePicker />
    </div>
  );
});

export default Other;
