import { generate } from "critical";
let dimensions = [
  { width: 414, height: 896 },
  { width: 1300, height: 900 },
  { width: 1920, height: 1080 },
];

generate(
  {
    inline: true,
    base: "dist/",
    src: "index.html",
    target: {
      html: "index.html",
      css: `critical.css`,
    },
    dimensions,
  },
  (err, output) => {
    if (err) {
      console.error(err);
    } else if (output) {
      console.log("Generated critical CSS");
    }
  }
);
