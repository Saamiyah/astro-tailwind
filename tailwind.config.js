const plugin = require("tailwindcss/plugin");
const { plugin: themePlugin, theme } = require("./src/styles/HZ.cjs");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/{pages,layouts,components}/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: { ...theme },
  },
  plugins: [
    // require("@tailwindcss/typography"),
    // require("daisyui"),
    themePlugin(plugin),
  ],
  // daisyUI config (optional)
  // daisyui: {
  //   styled: true,
  //   themes: ["pastel", "business"],
  //   base: false,
  //   utils: true,
  //   logs: true,
  //   rtl: false,
  //   prefix: "",
  //   darkTheme: "dark",
  // },
};
