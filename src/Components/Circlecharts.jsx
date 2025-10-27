import React from "react";
import ReactECharts from "echarts-for-react";

function Circlecharts({ widget }) {
  const data = widget.data || [];

  const colors = [
    "#3398DB", // Blue for Whiskeys
    "#A569BD", // Purple for Rum
    "#48C9B0", // Teal for Vodka
    "#F4D03F", // Yellow for Other
  ];

  const option = {
    backgroundColor: "#fff",
    title: {
      text: widget.name,
      left: "center",
      top: 20,
      textStyle: {
        fontSize: 14,
        fontWeight: "normal",
        color: "#333",
      },
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}<br/>Value: {c}<br/>Percentage: {d}%",
    },
    legend: {
      show: false, // Hide legend for a cleaner look like the image
    },
    color: colors,
    series: [
      {
        name: widget.name,
        type: "pie",
        radius: ["50%", "75%"], // thicker donut
        center: ["50%", "55%"],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: "outside",
          formatter: "{b}: {c} ({d}%)",
          fontSize: 12,
          color: "#444",
          padding: [2, 8, 2, 8],
          backgroundColor: "rgba(255,255,255,0.8)",
          borderRadius: 4,
          borderColor: "#ddd",
          borderWidth: 1,
        },
        labelLine: {
          show: true,
          length: 15,
          length2: 15,
          smooth: true,
          lineStyle: {
            color: "#bbb",
            width: 1,
          },
        },
        data: data.map((item, index) => ({
          value: item.value,
          name: item.label,
        })),
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 250, width: "100%" }} />;
}

export default Circlecharts;
