import { Pie } from "@ant-design/charts";
import React from "react";

type DataType = "Fixed Income" | "Equities" | "OTC Derivatives" | "Blockchain";

interface PieChartData {
  type: DataType;
  value: number;
}

const pieChartData: PieChartData[] = [
  {
    type: "Fixed Income",
    value: 46.9,
  },
  {
    type: "Equities",
    value: 46,
  },
  {
    type: "OTC Derivatives",
    value: 6.8,
  },
  {
    type: "Blockchain",
    value: 0.3,
  },
];

const config = {
  PieChartendPadding: 10,
  data: pieChartData,
  angleField: "value",
  colorField: "type",
  radius: 1,
  innerRadius: 0.5,
  label: {
    type: "inner",
    offset: "-50%",
    content: "{value}",
    style: {
      textAlign: "center",
      fontSize: 14,
    },
  },
  interactions: [{ type: "element-selected" }, { type: "element-active" }],
  statistic: {
    title: false as const,
    content: {
      style: {
        whiteSpace: "pre-wrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        color: "#351c75",
        fontSize: "20px",
      },
      formatter: function formatter() {
        return `Global Market Share %`;
      },
    },
  },
};

function PieChart() {
  return (
    <div className="w-1/2 max-xl:w-full">
      <Pie {...config} />
    </div>
  );
}

export default PieChart;
