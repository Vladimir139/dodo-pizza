import { devices } from "@shared/lib/constants/devices";
import { DefaultTheme } from "styled-components";

const gradient_blue: string =
  "linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)";
const gradient_sunset: string = "linear-gradient(to right, #ee0979, #ff6a00)";

export const lightTheme: DefaultTheme = {
  color: {
    main: "rgb(255, 105, 0)",
    hoverMain: "rgb(232, 97, 0)",

    text: {
      primary: "#ffffff",
      secondary: "rgb(0, 0, 0)",
      subText: "rgb(92, 99, 112)",
    },

    common: {
      primary: "rgb(209, 87, 0)",
      secondary: "rgb(255, 210, 179)",
    },

    background: {
      mainBg: "#ffffff",
      secondaryBg: "rgb(24, 24, 24)",
      thirdBg: "#242526",
    },
  },
  devices,
};

export const darkTheme: DefaultTheme = {
  color: {
    main: "rgb(255, 105, 0)",
    hoverMain: "rgb(232, 97, 0)",

    text: {
      primary: "#000000",
      secondary: "#ffffff",
      subText: "rgb(92, 99, 112)",
    },

    common: {
      primary: "rgb(209, 87, 0)",
      secondary: "rgb(255, 210, 179)",
    },

    background: {
      mainBg: "rgb(24, 24, 24)",
      secondaryBg: "#242526",
      thirdBg: "rgba(196, 196, 196, 0.2)",
    },
  },
  devices,
};
