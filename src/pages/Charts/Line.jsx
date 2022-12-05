import React from "react";
import { ChartsHeader } from "../../components";

import { Header, LineChart } from "../../components";

const Line = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 dark:bg-main-dark-bg rounded-3x1">
      <Header category="Chart" title="Line Chart" />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  );
};

export default Line;
