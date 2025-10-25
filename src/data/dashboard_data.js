const pieChartData = {
  categories: [
    {
      categoryName: "Marketing Dashboard",
      widgets: [
        {
          widgetName: "Social Media Performance",
          widgetText: "550 Total",
          widgetType: "pieChart",
          data: [
            { name: "LinkedIn Posts", value: 150, color: "#0077B5" }, // LinkedIn blue
            { name: "Twitter Engagements", value: 220, color: "#1DA1F2" }, // Twitter blue
            { name: "Instagram Stories", value: 180, color: "#E1306C" }, // Instagram pink
          ],
        },
      ],
    },
  ],
};

export default pieChartData;
