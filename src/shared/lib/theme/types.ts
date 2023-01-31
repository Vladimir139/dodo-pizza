import "styled-components";
import { devices, IDevices } from "@shared/lib/constants/devices";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      main: string;
      hoverMain: string;

      text: {
        primary: string;
        secondary: string;
        subText: string;
      };

      common: {
        primary: string;
        secondary: string;
      };

      background: {
        mainBg: string;
        secondaryBg: string;
        thirdBg: string;
      };
    };
    devices: IDevices;
  }
}
