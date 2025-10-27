import { create } from "zustand";
import pieChartData from "../data/dashboard_data";

const useDashboardStore = create((set) => ({
  data: pieChartData,
  searchTerm: "",

  setSearchTerm: (term) => set({ searchTerm: term }),

  addWidget: (categoryId, widget) =>
    set((state) => ({
      data: {
        ...state.data,
        categories: state.data.categories.map((cat) =>
          cat.id === categoryId
            ? { ...cat, widgets: [...cat.widgets, widget] }
            : cat
        ),
      },
    })),

  removeWidget: (categoryId, widgetId) =>
    set((state) => ({
      data: {
        ...state.data,
        categories: state.data.categories.map((cat) =>
          cat.id === categoryId
            ? {
                ...cat,
                widgets: cat.widgets.filter((w) => w.id !== widgetId),
              }
            : cat
        ),
      },
    })),
}));

export default useDashboardStore;
