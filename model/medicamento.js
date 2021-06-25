const mongoose = require("mongoose");

const Medicamento = mongoose.model("Medicamento", {
  brand: {
    type: String,
    required: [true, "Brand is required"],
    trim: true,
  },
  drug: {
    type: String,
    required: true,
    trim: true,
  },
  dose: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = Medicamento;
