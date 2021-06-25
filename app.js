const express = require("express");
const mongoose = require("mongoose");
const apiRouter = require("./routes/api");
const app = express();
const port = 8000;

// BD connection
mongoose.connect("mongodb://localhost:27017/Medicamentos", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// diz ao express para ler as request como json
app.use(express.json());
app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
