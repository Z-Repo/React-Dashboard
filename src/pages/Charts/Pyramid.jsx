import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../contexts/ContextProvider";
import { Header } from "../../components";
import { PyramidData } from "../../data/dummy";

const Pyramid = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 dark:bg-main-dark-bg rounded-3x1">
      <Header category="Chart" title="Pyramid Chart" />
      <ChartComponent
        id="pyramid-chart"
        chartPyramid={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#3c3c3c" : "#fff"}
      >
        <Inject services={[DateTime, Legend]} />
        <SeriesCollectionDirective>
          {PyramidData.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Pyramid;
