import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Category,
  DateTime,
  Legend,
  Tooltip,
  DataLabel,
  ColumnSeries,
  BarSeries,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../contexts/ContextProvider";
import { Header } from "../../components";
import {
  barCustomSeries,
  barPrimaryYAxis,
  barPrimaryXAxis,
} from "../../data/dummy";

const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Bar Chart" />
      <ChartComponent
        id="charts"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        legendSettings={{ background: "#fff4" }}
        background={currentMode === "Dark" ? "#fff0" : "#fff0"}
      >
        <Inject
          services={[
            BarSeries,
            ColumnSeries,
            DataLabel,
            DateTime,
            Tooltip,
            Category,
            Legend,
          ]}
        />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Bar;
