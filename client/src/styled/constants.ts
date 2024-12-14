const breakpoints = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  ml: "901px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const devices = {
  xs: `(max-width: ${breakpoints.xs})`,
  sm: `(max-width: ${breakpoints.sm})`,
  md: `(max-width: ${breakpoints.md})`,
  ml: `(max-width: ${breakpoints.ml})`,
  lg: `(max-width: ${breakpoints.lg})`,
  xl: `(max-width: ${breakpoints.xl})`,
  "2xl": `(max-width: ${breakpoints["2xl"]})`,
  mm: `(min-width: ${breakpoints.ml})`,
};
