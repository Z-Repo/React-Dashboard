import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationTooltip,
  AccumulationDataLabel,
  AccumulationLegend,
  PyramidSeries,
  Inject,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../contexts/ContextProvider";

import { PyramidData } from "../../data/dummy";
import { Header } from "../../components";

const Pyramid = ({ legendVisiblity }) => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Pyramid Chart" />
      <AccumulationChartComponent
        id="charts"
        legendSettings={{
          visible: legendVisiblity,
          background: "#fff4",
        }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373e" : "#fff"}
      >
        <Inject
          services={[
            AccumulationTooltip,
            AccumulationDataLabel,
            AccumulationLegend,
            PyramidSeries,
          ]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            type="Pyramid"
            dataSource={PyramidData}
            xName="x"
            yName="y"
            dataLabel={{
              visible: true,
              name: "text",
              position: "Outside",
              font: {
                fontWeight: "600",
              },
            }}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Pyramid;
