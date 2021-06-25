const express = require("express");
const mongoose = require("mongoose");
const Medicamento = require("./model/medicamento");
const app = express();
const port = 8000;

// diz ao express para ler as request como json
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Medicamentos", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/api/medicine", (req, res) => {
  Medicamento.find({})
    .then((medicamentos) => res.status(200).json(medicamentos))
    .catch((e) => res.status(500).json({ error: e }));
});

app.get("/api/medicine/:id", (req, res) => {
  Medicamento.findById(req.params.id)
    .then((medicamento) => res.status(200).json(medicamento))
    .catch((e) => res.status(500).json({ error: e }));
});

app.put("/api/medicine/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.status(200).json({ success: "Alterado com sucesso" });
});

app.post("/api/medicine", (req, res) => {
  const { brand, drug, dose } = req.body;
  const medicamento = new Medicamento({ brand, drug, dose });
  medicamento
    .save()
    .then(() => {
      res.status(201).json(medicamento);
    })
    .catch((e) => res.status(500).json({ error: e }));
});

app.delete("/api/medicine/:id", (req, res) => {
  Medicamento.findById(req.params.id)
    .then((medicamento) => {
      return medicamento.delete();
    })
    .then((medicamento) => {
      res
        .status(200)
        .json({
          success: ` O medicamento ${medicamento._id} foi elimuinado com sucesso`,
        });
    })
    .catch((e) => res.status(500).json({ error: e }));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
