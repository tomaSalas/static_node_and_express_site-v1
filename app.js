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

app.use((req, res, next) => {
  const err = new Error('Oops! this page does not exist');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  if (err.status === 404) {
      console.log("You encountered the following error: " + err.status + " " + err.message);
      res.render("not-found", { message: err.message, status: err.status, stack: err.stack } );
  }
  else {
      console.log("You encountered the following error: 500 - INTERNAL SERVER ERROR");
      res.render("error", { message: "Something is wrong with the server", status: 500, stack: err.stack });
  }
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
