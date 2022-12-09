import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Category,
  Tooltip,
  Legend,
  ColumnSeries,
  RangeColorSettingDirective,
  RangeColorSettingsDirective,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../contexts/ContextProvider";
import { Header } from "../../components";
import {
  colorMappingData,
  ColorMappingPrimaryYAxis,
  ColorMappingPrimaryXAxis,
  rangeColorMapping,
} from "../../data/dummy";

const ColorMapping = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="ColorMapping Chart" />
      <ChartComponent
        id="ColorMapping-chart"
        primaryXAxis={ColorMappingPrimaryXAxis}
        primaryYAxis={ColorMappingPrimaryYAxis}
        chartColorMapping={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#fff0" : "#fff0"}
        legendSettings={{ mode: "Range", background: "#fff4" }}
      >
        <Inject services={[ColumnSeries, Legend, Tooltip, Category]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={colorMappingData[0]}
            name="USA"
            xName="x"
            yName="y"
            type="Column"
            cornerRadius={{ topLeft: 10, topRight: 10 }}
          />
        </SeriesCollectionDirective>
        <RangeColorSettingsDirective>
          {rangeColorMapping.map((item, index) => (
            <RangeColorSettingDirective key={index} {...item} />
          ))}
        </RangeColorSettingsDirective>
      </ChartComponent>
    </div>
  );
};

export default ColorMapping;
