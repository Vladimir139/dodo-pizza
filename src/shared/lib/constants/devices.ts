export const deviceWidths = {
  mobile: 319,
  smallTablet: 569,
  tablet: 797,
  laptop: 1024,
};

export interface IDevices {
  mobile: string;
  smallTablet: string;
  tablet: string;
  laptop: string;
}

export const devices: IDevices = {
  mobile: `${deviceWidths.mobile}px`,
  smallTablet: `${deviceWidths.smallTablet}px`,
  tablet: `${deviceWidths.tablet}px`,
  laptop: `${deviceWidths.laptop}px`,
};
