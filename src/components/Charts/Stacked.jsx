import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  StackingColumnSeries,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  stackedCustomSeries,
  stackedPrimaryYAxis,
  stackedPrimaryXAxis,
} from "../../data/dummy";
import { Header } from "../../components";

const Stacked = (width, height) => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Stacked Chart" />
      <ChartComponent
        id="Stacked-chart"
        primaryXAxis={stackedPrimaryXAxis}
        primaryYAxis={stackedPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#fff0" : "#fff"}
        legendSettings={{ background: "#fff4" }}
      >
        <Inject services={[StackingColumnSeries, Legend, Tooltip, Category]} />
        <SeriesCollectionDirective>
          {stackedCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Stacked;
