import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationTooltip,
  AccumulationDataLabel,
  AccumulationLegend,
  PieSeries,
  Inject,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../contexts/ContextProvider";

import { Header } from "../../components";

const Pie = ({ id, data, legendVisiblity, height, currentColor }) => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3x1">
      <Header category="Chart" title="Pie Chart" />
      <AccumulationChartComponent
        id={id}
        legendSettings={{
          visible: legendVisiblity,
          background: "#fff4",
        }}
        height={height}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373e" : "#fff"}
      >
        <Inject
          services={[
            AccumulationTooltip,
            AccumulationDataLabel,
            AccumulationLegend,
            PieSeries,
          ]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={data}
            xName="x"
            yName="y"
            innerRadius="10%"
            startAngle={0}
            endAngle={360}
            explodeOffset="10%"
            explodeIndex={2}
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

export default Pie;
