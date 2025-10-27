import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Category from "../Components/Category";
import { Box, Button, Dialog, TextField, Typography } from "@mui/material";
import useDashboardStore from "../store/store.js";

const Dashboard = () => {
  const { data, addWidget, searchTerm } = useDashboardStore();

  const [open, setOpen] = useState(false);
  const [widgetName, setWidgetName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [factors, setFactors] = useState([{ label: "", value: "" }]);

  const addNewFactor = () => setFactors([...factors, { label: "", value: "" }]);
  const removeFactor = (idx) => setFactors(factors.filter((_, i) => i !== idx));
  const updateFactor = (idx, key, value) => {
    const newFactors = [...factors];
    newFactors[idx][key] = key === "value" ? Number(value) : value;
    setFactors(newFactors);
  };

  const handleAddWidget = () => {
    if (!selectedCategory) return alert("Select a category!");
    if (!widgetName) return alert("Enter widget name!");
    if (factors.some((f) => !f.label || f.value === "")) return alert("Fill all factor fields!");

    const widget = {
      id: `w_${Date.now()}`,
      name: widgetName,
      type: "pie",
      data: factors.map((f) => ({ label: f.label, value: f.value })),
    };

    addWidget(selectedCategory, widget);

    setWidgetName("");
    setFactors([{ label: "", value: "" }]);
    setSelectedCategory("");
    setOpen(false);
  };

  return (
    <Box sx={{ p: 3, bgcolor: "#F7F8FA", minHeight: "100vh" }}>
      <Navbar />

      {data.categories.map((cat) => (
        <Category key={cat.id} category={cat} />
      ))}

      <Button
        variant="contained"
        sx={{ mt: 3, borderRadius: 3 }}
        onClick={() => setOpen(true)}
      >
        + Add Widget
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <Box
          p={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            minWidth: 400,
            bgcolor: "#fff",
          }}
        >
          <Typography variant="h6" sx={{ mb: 1 }}>
            Add Pie Chart Widget
          </Typography>

          <TextField
            label="Widget Name"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
          />
          <TextField
            label="Category ID"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            placeholder="e.g., cat_1"
          />

          <Typography sx={{ mt: 2 }}>Factors & Values</Typography>
          {factors.map((f, idx) => (
            <Box key={idx} sx={{ display: "flex", gap: 1 }}>
              <TextField
                label="Factor"
                value={f.label}
                onChange={(e) => updateFactor(idx, "label", e.target.value)}
                fullWidth
              />
              <TextField
                label="Value"
                type="number"
                value={f.value}
                onChange={(e) => updateFactor(idx, "value", e.target.value)}
                sx={{ width: "100px" }}
              />
              <Button color="error" onClick={() => removeFactor(idx)}>
                X
              </Button>
            </Box>
          ))}

          <Button variant="outlined" onClick={addNewFactor}>
            + Add Factor
          </Button>
          <Button variant="contained" onClick={handleAddWidget}>
            Add Widget
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
};

export default Dashboard;
