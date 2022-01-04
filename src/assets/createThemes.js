const fs = require("fs");

let dirname = "themes/";
let filenames = fs.readdirSync(dirname);
let result = filenames.map(filename => JSON.parse(fs.readFileSync(dirname + filename, "utf-8")))

fs.writeFileSync("themes.json", JSON.stringify(result, null, 2))