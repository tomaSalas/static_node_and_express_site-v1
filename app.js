const express = require('express')
const app = express()
const port = 3000


const mainRoute = require("./routes/index")
app.use(mainRoute);
const aboutRoute = require("./routes/about")
app.use("/about", aboutRoute);
const projectRoute = require("./routes/project");
app.use("/project", projectRoute);

app.use("/static", express.static("public"));
app.set('view engine', 'pug');


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
