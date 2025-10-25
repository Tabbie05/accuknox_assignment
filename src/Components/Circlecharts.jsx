import React from "react";
import ReactECharts from "echarts-for-react";

function CircleChart({ widget }) {
  const data = widget.data;

  const option = {
    title: {
      text: widget.widgetName,
      left: "center",
      top: 20,
      textStyle: {
        fontSize: 18,
      },
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "horizontal",
      bottom: 10,
      data: data.map((item) => item.name),
    },
    series: [
      {
        name: widget.widgetName,
        type: "pie",
        radius: ["40%", "70%"], // donut style
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: "outside",
          formatter: "{b}: {c} ({d}%)",
        },
        labelLine: {
          show: true,
        },
        data: data.map((item) => ({
          value: item.value,
          name: item.name,
          itemStyle: { color: item.color },
        })),
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 400, width: "100%" }} />;
}

export default CircleChart;
