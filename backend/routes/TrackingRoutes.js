const express = require("express");
const router = express.Router();
const TrackingData = require("../models/TrackingData");

router.post("/save", async (req, res) => {
  try {
    const { event, data } = req.body;
    await TrackingData.savePixelData(event, data);
    res.status(200).json({ message: "Dados do Pixel salvos com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao salvar os dados" });
  }
});

module.exports = router;
