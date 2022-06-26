const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
<<<<<<< HEAD
  // "*.{js,jsx,ts,tsx,json,md,css}": ["prettier --write"],
=======
  //"*.{js,jsx,ts,tsx,json,md,css}": ["prettier --write"],
>>>>>>> e7625a6 (remove prettier --write)
};
