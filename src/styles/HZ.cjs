// https://tailwindcss.com/docs/theme
module.exports.theme = {
  colors: {
    primary: "rgb(var(--color-primary) / <alpha-value>)",
    "primary-accent": "rgb(0 0 63 / <alpha-value>)",
    "text-prominent": "rgb(25 42 107 / <alpha-value>)",
    "button-accent": "rgb(25 42 107 / <alpha-value>)",
    "button-accent-hover": "rgb(0 0 63 / <alpha-value>)",
    "button-accent-high-attention": "rgb(25 42 107 / <alpha-value>)",
    "button-accent-high-attention-hover": "rgb(0 0 63 / <alpha-value>)",
    "button-contrast": "rgb(255 255 255 / <alpha-value>)",
    secondary: "rgb(136 136 136 / <alpha-value>)",
    "secondary-accent": "rgb(102 102 102 / <alpha-value>)",
    "feedback-success": "rgb(1 145 100 / <alpha-value>)",
    "feedback-warning": "rgb(255 177 31 / <alpha-value>)",
    "feedback-error": "rgb(213 16 48 / <alpha-value>)",
    "feedback-neutral": "rgb(102 102 102 / <alpha-value>)",
  },
  fontFamily: {
    "button-small": "gotham",
    "button-big": "gotham",
    "button-small-icon": "rasch-font",
    "button-big-icon": "rasch-font",
  },
  fontWeight: {
    "button-small": 700,
    "button-big": 700,
    "button-small-icon": 400,
    "button-big-icon": 400,
  },
  lineHeight: {
    "button-small": "$_lineheight.2",
    "button-big": "$_lineheight.3",
    "button-small-icon": "auto",
    "button-big-icon": "auto",
  },
  fontSize: {
    "button-small": "16px",
    "button-big": "20px",
    "button-small-icon": "14px",
    "button-big-icon": "20px",
  },
  letterSpacing: {
    "button-small": "0%",
    "button-big": "0%",
    "button-small-icon": "0%",
    "button-big-icon": "0%",
  },
  borderRadius: {
    button: "4px",
  },
  spacing: {
    "button-big-horizontal": "24px",
    "button-big-vertical": "16px",
    "button-small-horizontal": "16px",
    "button-small-vertical": "8px",
    "button-group-horizontal": "16px",
    "button-group-vertical": "16px",
  },
};

// https://tailwindcss.com/docs/adding-custom-styles#writing-plugins
module.exports.plugin = (plugin) =>
  plugin(({ addUtilities }) => {
    addUtilities({
      ".typo-button-small": {
        font: "700 16px/100% gotham",
      },
      ".text-decoration-button-small": {
        "text-decoration": "none",
      },
      ".text-transform-button-small": {
        "text-transform": "none",
      },
      ".typo-button-big": {
        font: "700 20px/100% gotham",
      },
      ".text-decoration-button-big": {
        "text-decoration": "none",
      },
      ".text-transform-button-big": {
        "text-transform": "none",
      },
      ".typo-button-small-icon": {
        font: "400 14px/100% rasch-font",
      },
      ".text-decoration-button-small-icon": {
        "text-decoration": "none",
      },
      ".text-transform-button-small-icon": {
        "text-transform": "none",
      },
      ".typo-button-big-icon": {
        font: "400 20px/100% rasch-font",
      },
      ".text-decoration-button-big-icon": {
        "text-decoration": "none",
      },
      ".text-transform-button-big-icon": {
        "text-transform": "none",
      },
    });
  });
