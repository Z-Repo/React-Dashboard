import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  PieSeries,
  Inject,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../contexts/ContextProvider";
import { Header } from "../../components";
import { pieChartData } from "../../data/dummy";

const Pie = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 dark:bg-main-dark-bg rounded-3x1">
      <Header category="Chart" title="Pie Chart" />
      <AccumulationChartComponent
        id="Pie-chart"
        chartBar={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#3c3c3c" : "#fff"}
      >
        <Inject
          services={[
            AccumulationChartComponent,
            AccumulationSeriesCollectionDirective,
            AccumulationSeriesDirective,
            PieSeries,
          ]}
        />
        <AccumulationSeriesCollectionDirective>
          {pieChartData.map((item, index) => (
            <AccumulationSeriesDirective key={index} {...item} />
          ))}
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Pie;
