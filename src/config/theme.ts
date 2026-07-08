export type PillColor = {
  bg: string;
  fg: string;
};

export type LinkTreeTheme = {
  colors: {
    cream: string;
    ink: string;
    dim: string;
    rose: string;
    brown: string;
    denim: string;
    latte: string;
    border: string;
    scrollTrack: string;
    scrollThumb: string;
    scrollThumbHover: string;
    spiralFront: string;
  };
  pillColors: PillColor[];
};

export const theme: LinkTreeTheme = {
  colors: {
    cream: "#F4F0EA",
    ink: "#3A3532",
    dim: "#8C847E",
    rose: "#EAAEAC",
    brown: "#655552",
    denim: "#8A9DB0",
    latte: "#E0CDBD",
    border: "rgba(101,85,82,0.15)",
    scrollTrack: "rgba(224,205,189,0.24)",
    scrollThumb: "linear-gradient(180deg, rgba(101,85,82,0.68), rgba(138,157,176,0.58))",
    scrollThumbHover: "linear-gradient(180deg, rgba(58,53,50,0.78), rgba(138,157,176,0.74))",
    spiralFront: "#CC6B5E"
  },
  pillColors: [
    { bg: "#EAAEAC", fg: "#3A3532" },
    { bg: "#655552", fg: "#F4F0EA" },
    { bg: "#8A9DB0", fg: "#F4F0EA" },
    { bg: "#E0CDBD", fg: "#3A3532" }
  ]
};
