import express from 'express';
import mongoose from 'mongoose';
const fs = require('fs');
import CustomSpectacle from '../model/customSpectacle.model.js';

const router = express.Router();

export const getCusSpectacles = async (req, res) => {
  try {
    const spectacles = await CustomSpectacle.find();

    res.status(200).json(spectacles);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const getCusSpectacle = async (req, res) => {
  const { id } = req.params;

  try {
    const spectacle = await CustomSpectacle.findById(id);

    res.status(200).json(spectacle);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createCusSpectacle = async (req, res) => {
  const { Model, Front, Temples, Lenses, Price } = req.body;

  const newSpectacle = new CustomSpectacle({ Model, Front, Temples, Lenses, Price })

  try {
    await newSpectacle.save();

    res.status(201).json(newSpectacle);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export const updateCusSpectacle = async (req, res) => {
  const { id } = req.params;
  const { Model, Front, Temples, Lenses, Price } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No spectacle with id: ${id}`);

  const updatedSpectacle = { Model, Front, Temples, Lenses, Price };

  await CustomSpectacle.findByIdAndUpdate(id, updatedSpectacle, { new: true });

  res.json(updatedSpectacle);
}

export const deleteCusSpectacle = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No spectacle with id: ${id}`);

  await CustomSpectacle.findByIdAndRemove(id);

  res.json({ message: "Spectacle deleted successfully." });
}

export const uploadImage = async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }
  try {
    const file = req.files.file;
    let filename = file.name;
    await file.mv(`${__dirname}/../../../../frontend/public/img/cus_spec/${filename}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      res.json({ fileName: filename, filePath: `/cus_spec/${filename}` });
    });
  } catch (e) {
    res.status(400).send({ message: "Error uploading image!", error: e.toString(), req: req.body });
  }
}

export const deleteImage = (req, res) => {
  try {
    const { id } = req.params;
    fs.unlinkSync(`${__dirname}/../../../../frontend/public/img/cus_spec/${id}`);

    res.status(201).send({ message: "Image deleted" });

  } catch (e) {
    res.status(400).send({ message: "Error deleting image!", error: e.toString(), req: req.body });
  }
};

export default router;

