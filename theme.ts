import { buildLegacyTheme } from "sanity";

const props = {
  "--my-white": "#fff",
  "--color-primary": "#FF6B6B",
  "--color-secondary": "#6B8AFF",
  "--color-tertiary": "#3DDC97",
  "--color-accent": "#FFC65C",
  "--color-dark": "#333",
  "--color-success": "#4CAF50",
  "--color-warning": "#FFA500",
  "--color-danger": "#FF0000",
};

export const myTheme = buildLegacyTheme({
  // Base theme colors
  "--black": props["--color-dark"],
  "--white": props["--my-white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--color-dark"],
  "--component-text-color": props["--my-white"],

  // Brand
  "--brand-primary": props["--color-primary"],

  // Default Button
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--color-primary"],
  "--default-button-success-color": props["--color-success"],
  "--default-button-warning-color": props["--color-warning"],
  "--default-button-danger-color": props["--color-danger"],

  //   State
  "--state-info-color": props["--color-primary"],
  "--state-success-color": props["--color-success"],
  "--state-warning-color": props["--color-warning"],
  "--state-danger-color": props["--color-danger"],

  //   Navbar
  "--main-navigation-color": props["--color-dark"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--color-primary"],
});
