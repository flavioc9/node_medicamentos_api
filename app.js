const express = require("express");
const app = express();
const port = 8000;

// diz ao express para ler as request como json
app.use(express.json());

app.get("/api/medicine", (req, res) => {
  res.status(200).json([
    {
      brand: "Ben-n-uron",
      drug: "paracetamol",
      dose: "1000mg",
    },
  ]);
});

app.get("/api/medicine/:id", (req, res) => {
  console.log(req.params.id);
  res.status(200).json({
    brand: "Ben-n-uron",
    drug: "paracetamol",
    dose: "1000mg",
  });
});

app.put("/api/medicine/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.status(200).json({ success: "Alterado com sucesso" });
});

app.post("/api/medicine", (req, res) => {
  console.log(req.body);
  res.status(201).json({
    brand: "Ben-n-uron",
    drug: "paracetamol",
    dose: "1000mg",
  });
});

app.delete("/api/medicine/:id", (req, res) => {
  res.status(503).json([{ error: "Não implementado" }]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
