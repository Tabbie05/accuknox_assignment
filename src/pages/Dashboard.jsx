import React from "react";
import Navbar from "../Components/Navbar";
import { Box } from "@mui/material";
import CircleChart from "../Components/Circlecharts";
import pieChartData from "../data/dashboard_data";

function Dashboard() {
  return (
    <Box>
      <Navbar />
      <Box sx={{ padding: 2 }}>
        {pieChartData.categories.map((category, index) =>
          category.widgets.map(
            (widget, wIndex) =>
              widget.widgetType === "pieChart" && (
                <CircleChart key={`${index}-${wIndex}`} widget={widget} />
              )
          )
        )}
      </Box>
    </Box>
  );
}

export default Dashboard;
