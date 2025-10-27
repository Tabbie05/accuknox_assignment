import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Circlecharts from "../Components/Circlecharts.jsx";
import useDashboardStore from "../store/store.js";

const Widget = ({ categoryId, widget }) => {
  const { removeWidget } = useDashboardStore();

  return (
    <Card
      sx={{
        minWidth: 280,
        maxWidth: 320,
        height: 320,
        borderRadius: "16px",
        backgroundColor: "#fff",
        position: "relative",
        boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
        transition: "0.3s",
        display: "flex",
        flexDirection: "column",
        "&:hover": { boxShadow: "0 8px 20px rgba(0,0,0,0.15)" },
      }}
    >
      <IconButton
        size="small"
        sx={{ position: "absolute", top: 6, right: 6 }}
        onClick={() => removeWidget(categoryId, widget.id)}
        aria-label={`Remove widget ${widget.name}`}
      >
        <CloseIcon fontSize="small" />
      </IconButton>

      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: 3,
          gap: 1,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ mb: 1, fontWeight: 600, color: "#222" }}
          noWrap
          title={widget.name}
        >
          {widget.name}
        </Typography>

        {widget.type === "text" ? (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ whiteSpace: "pre-line", wordBreak: "break-word" }}
          >
            {widget.text}
          </Typography>
        ) : (
          <Circlecharts widget={widget} />
        )}
      </CardContent>
    </Card>
  );
};

export default Widget;
