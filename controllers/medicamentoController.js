const Medicamento = require("../model/medicamento");
const mongoose = require("mongoose");
//const ValidationError = require('mongoose/lib/error/validation')

const index = (req, res) => {
  Medicamento.find({})
    .then((medicamentos) => res.status(200).json(medicamentos))
    .catch((e) => res.status(500).json({ error: e }));
};

const show = (req, res) => {
  Medicamento.findById(req.params.id)
    .then((medicamento) => res.status(200).json(medicamento))
    .catch((e) => res.status(500).json({ error: e }));
};

const update = (req, res) => {
  Medicamento.updateOne({ _id: req.params.id }, req.body)
    .then((result) => {
      res.status(200).json({ modified: result.nModified });
    })
    .catch((e) => handleError(e, res));
};

const store = (req, res) => {
  const { brand, drug, dose } = req.body;
  const medicamento = new Medicamento({ brand, drug, dose });
  medicamento
    .save()
    .then(() => {
      res.status(201).json(medicamento);
    })
    .catch((e) => handleError(e, res));
};

const destroy = async (req, res) => {
  try {
    let medicamento = await Medicamento.findById(req.params.id);
    let deleted = await medicamento.delete();
    res
      .status(200)
      .json({
        success: ` O medicamento ${deleted._id} foi elimuinado com sucesso`,
      });
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const handleError = (e, res) => {
  let statusCode = 500;
  let errors = { errors: "Erro no servidor!" };
  if (e instanceof mongoose.Error.ValidationError) {
    errors = {};
    statusCode = 400;

    Object.keys(e.errors).forEach((key) => {
      errors[key] = e.errors[key].message;
    });
  }

  res.status(statusCode).json({ errors });
};

module.exports = {
  index,
  show,
  update,
  store,
  destroy,
};
