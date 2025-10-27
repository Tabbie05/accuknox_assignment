import React from "react";
import { Box, Typography } from "@mui/material";
import Widget from "./Widget";
import useDashboardStore from "../store/store.js";

const Category = ({ category }) => {
  const { searchTerm } = useDashboardStore();

  // Filter widgets based on search term
  const filteredWidgets = category.widgets.filter((widget) => {
    if (!searchTerm) return true; // Show all if no search term
    
    const searchLower = searchTerm.toLowerCase();
    
    // Search in widget name
    if (widget.name.toLowerCase().includes(searchLower)) return true;
    
    // Search in widget type
    if (widget.type.toLowerCase().includes(searchLower)) return true;
    
    // Search in text content (for text widgets)
    if (widget.text && widget.text.toLowerCase().includes(searchLower)) return true;
    
    // Search in pie/donut chart labels
    if (widget.data) {
      return widget.data.some((item) => 
        item.label.toLowerCase().includes(searchLower)
      );
    }
    
    return false;
  });

  // Don't show category if no widgets match the search
  if (filteredWidgets.length === 0 && searchTerm) return null;

  return (
    <Box sx={{ mb: 6 }}>
      <Typography
        variant="h6"
        sx={{ mt: 2, mb: 2, fontWeight: 700, color: "#222", userSelect: "none" }}
      >
        {category.name}
        {searchTerm && (
          <Typography component="span" sx={{ ml: 2, fontSize: "0.9rem", color: "#666" }}>
            ({filteredWidgets.length} result{filteredWidgets.length !== 1 ? 's' : ''})
          </Typography>
        )}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "flex-start",
        }}
      >
        {filteredWidgets.map((widget) => (
          <Widget key={widget.id} categoryId={category.id} widget={widget} />
        ))}
      </Box>
    </Box>
  );
};

export default Category;