const express = require("express");
const router = express.Router();
const MedicamentoController = require("../controllers/medicamentoController");

router.get("/medicine", MedicamentoController.index);
router.get("/medicine/:id", MedicamentoController.show);
router.put("/medicine/:id", MedicamentoController.update);
router.post("/medicine", MedicamentoController.store);
router.delete("/medicine/:id", MedicamentoController.destroy);

module.exports = router;
