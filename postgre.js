const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
const db = require("./app/models");
db.sequelize.sync().then(() => {
    console.log("Drop and re-sync db.");
  })  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to postgre application." });
});
require("./app/routes/tutorial.routes")(app);

app.listen(8081, () => {
  console.log(`Server is running on port 8081`);
});