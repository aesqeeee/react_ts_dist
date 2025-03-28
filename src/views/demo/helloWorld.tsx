import React, { memo } from "react";
import { useAppSelector, shallowEqualApp } from "../../store";
// import helloWordStyle from './helloworld.module.css'

const HelloWrold = memo((props: any) => {
  const { counte } = useAppSelector(
    (state: any) => ({
      counte: state.counter.count
    }),
    shallowEqualApp
  );

  return (
    <div>
      <h1>{counte}</h1>
    </div>
  );
});

export default HelloWrold;
