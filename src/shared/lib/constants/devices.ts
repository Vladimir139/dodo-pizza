export const deviceWidths = {
  mobile: 320,
  smallTablet: 571,
  tablet: 799,
  laptop: 1281,
  desktop: 1441,
};

export interface IDevices {
  mobile: string;
  smallTablet: string;
  tablet: string;
  laptop: string;
  desktop: string;
}

export const devices: IDevices = {
  mobile: `${deviceWidths.mobile}px`,
  smallTablet: `${deviceWidths.smallTablet}px`,
  tablet: `${deviceWidths.tablet}px`,
  laptop: `${deviceWidths.laptop}px`,
  desktop: `${deviceWidths.desktop}px`,
};
