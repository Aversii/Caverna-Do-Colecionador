import { ITheme } from "./ITheme";

export const darkTheme: ITheme = {
  colors: {
    bgPrimary: "#1e1e1e",
    bgSecondary: "#212529",
    bgTerciary: "#323640",
    headPrimary: "#ffcc00",
    headSecondary: "#d3fbd8",
    headTerciary: "#D147A3",
    textPrimary: "#fff",
    textSecondary: "#ddd",
    textTerciary: "#bbb",
    error: "#FF4C4C",
    success: "#4CAF50",
    warning: "#FFC107",
    gradient: "linear-gradient(90deg, #012C4C, #00455E, #006571, #008486, #002C3C)",
  },
  fonts: {
    body: "'Roboto', sans-serif",
    heading: "'Poppins', sans-serif",
    monospace: "'Courier New', monospace",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
  borders: {
    radius: "8px",
    width: "2px",
    color: "#007bff",
  },
  shadows: {
    small: "0px 1px 3px rgba(0, 0, 0, 0.5)",
    medium: "0px 4px 6px rgba(0, 0, 0, 0.5)",
    large: "0px 8px 15px rgba(0, 0, 0, 0.5)",
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
    largeDesktop: "1200px",
  },
  typography: {
    h1: {
      fontSize: "50",
      fontWeight: "regular",
    },
    h2: {
      fontSize: "24px",
      fontWeight: "600",
    },
    p: {
      fontSize: "16px",
      lineHeight: "1.5",
    },
  },
};

export const lightTheme: ITheme = {
  colors: {
    bgPrimary: "#fff",
    bgSecondary: "#4287f5",
    bgTerciary: "#4287f5",
    headPrimary: "#7DF9FF",
    headSecondary: "#FFA07A",
    headTerciary: "#FF6347",
    textPrimary: "#333",
    textSecondary: "#343a40",
    textTerciary: "#999",
    error: "#FF4C4C",
    success: "#4CAF50",
    warning: "#FFC107",
    gradient: "linear-gradient(90deg, #2847d3, #3e6ee3, #66a1e8, #bbe3be)",
  },
  fonts: {
    body: "'Roboto', sans-serif",
    heading: "'Roboto', sans-serif",
    monospace: "'Courier New', monospace",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
  borders: {
    radius: "8px",
    width: "1px",
    color: "#CCCCCC",
  },
  shadows: {
    small: "0px 1px 3px rgba(0, 0, 0, 0.1)",
    medium: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    large: "0px 8px 15px rgba(0, 0, 0, 0.1)",
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
    largeDesktop: "1200px",
  },
  typography: {
    h1: {
      fontSize: "32px",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "24px",
      fontWeight: "600",
    },
    p: {
      fontSize: "16px",
      lineHeight: "1.5",
    },
  },
};
