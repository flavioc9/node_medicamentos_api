const mongoose = require("mongoose");

const Medicamento = mongoose.model("Medicamento", {
  brand: String,
  drug: String,
  dose: String,
});

module.exports = Medicamento;
