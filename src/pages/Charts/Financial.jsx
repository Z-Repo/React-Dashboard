import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  HiloSeries,
  Logarithmic,
  Inject,
  DateTime,
  Tooltip,
  Zoom,
  Crosshair,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../contexts/ContextProvider";
import { Header } from "../../components";
import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from "../../data/dummy";

const date1 = new Date("2017, 1, 1");

function filterValue(value) {
  if (value.x >= date1) {
    return value.x, value.high, value.low;
  }
}

const returnValue = financialChartData.filter(filterValue);

const Financial = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Financial Chart" />
      <ChartComponent
        id="charts"
        primaryXAxis={FinancialPrimaryXAxis}
        primaryYAxis={FinancialPrimaryYAxis}
        legendSettings={{ visible: true }}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true, shared: true }}
        crosshair={{ enable: true, lineType: "Vertical", line: { width: 1 } }}
        background={currentMode === "Dark" ? "#fff0" : "#fff0"}
      >
        <Inject
          services={[
            HiloSeries,
            Tooltip,
            Logarithmic,
            Crosshair,
            Zoom,
            DateTime,
          ]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective
            type="Hilo"
            dataSource={returnValue}
            xName="x"
            yName="y"
            low="low"
            high="high"
            name="Stock"
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Financial;
