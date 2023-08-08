let { glob } = require("glob");
let critical = import("critical");

// dimensions to test critical css on
let dimensions = [
  { width: 414, height: 896 },
  { width: 1300, height: 900 },
  { width: 1920, height: 1080 },
];

// relative build output folder
let base = "dist";

glob("/**/*.html", { root: base }, (err, files) => {
  if (err) throw err;

  files.forEach((filePath) => {
    critical.generate({
      base,
      src: "index.html",
      target: {
        html: "index-critical.html",
        css: "critical.css",
      },
      inline: true,
      minify: true,
      extract: false,
      dimensions,
      // Force critical to run penthouse only on a single page at a time to
      // avoid timeout issues.
      concurrency: 1,
    });
  });
});
