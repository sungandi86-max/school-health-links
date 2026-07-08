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
    cream: "#F6F0E7",
    ink: "#3E3732",
    dim: "#8B7E75",
    rose: "#E8B8AE",
    brown: "#66534A",
    denim: "#91A5AE",
    latte: "#E9D8C5",
    border: "rgba(102,83,74,0.15)",
    scrollTrack: "rgba(233,216,197,0.28)",
    scrollThumb: "linear-gradient(180deg, rgba(102,83,74,0.62), rgba(145,165,174,0.52))",
    scrollThumbHover: "linear-gradient(180deg, rgba(62,55,50,0.74), rgba(145,165,174,0.68))",
    spiralFront: "#E8B8AE"
  },
  pillColors: [
    { bg: "#E9D8C5", fg: "#3E3732" },
    { bg: "#E8B8AE", fg: "#3E3732" },
    { bg: "#91A5AE", fg: "#F6F0E7" },
    { bg: "#66534A", fg: "#F6F0E7" }
  ]
};
