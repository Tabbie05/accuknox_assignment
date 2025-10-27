import React from "react";
import { Box, Typography } from "@mui/material";
import Widget from "./Widget";

const Category = ({ category }) => {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography
        variant="h6"
        sx={{mt:2, mb: 2, fontWeight: 700, color: "#222", userSelect: "none" }}
      >
        {category.name}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "flex-start",
        }}
      >
        {category.widgets.map((widget) => (
          <Widget key={widget.id} categoryId={category.id} widget={widget} />
        ))}
      </Box>
    </Box>
  );
};

export default Category;
