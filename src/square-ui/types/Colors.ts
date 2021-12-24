import { css } from "styled-components";

enum BackgroundColor {
  Light = "#FFFFFF",
  Root = "#EBECED",
  Default = "#FCFCFC",
  Higher = "#F0F1F2",
  Highest = "#E4E5E6",
}

enum ForegroundColor {
  Dark = "#191919",
  Default = "#07080A",
  Dimmer = "#3D4047",
  Dimmest = "#5C5F66",
}

enum BorderColor {
  Dark = "#707070",
  Default = "#AFB1B3",
  Dimmer = "#C0C3C4",
  Dimmest = "#D2D4D6",
}

export { BackgroundColor as BGC, ForegroundColor as FGC, BorderColor as BDC }
export { BackgroundColor, ForegroundColor, BorderColor };
