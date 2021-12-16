// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    bg: {
      tile: string;
      root: string;
      default: string;
      higher: string;
      highest: string;
    };
    darkBg: {
      default: string;
    };
    fg: {
      //foreground
      default: string;
      dimmer: string;
      dimmest: string;
    };
    outline: {
      default: string;
      dimmer: string;
      dimmest: string;
    };
    fr: {
      livid: string;
    };
  }
}
