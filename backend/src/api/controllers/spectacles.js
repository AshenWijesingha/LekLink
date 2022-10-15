import express from 'express';
import mongoose from 'mongoose';
const fs = require('fs');
import Spectacle from '../model/spectacle.model.js';

const router = express.Router();

export const getSpectacles = async (req, res) => {
  try {
    const spectacles = await Spectacle.find();

    res.status(200).json(spectacles);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const getSpectacle = async (req, res) => {
  const { id } = req.params;

  try {
    const spectacle = await Spectacle.findById(id);

    res.status(200).json(spectacle);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createSpectacle = async (req, res) => {
  const { Title, Brand, Quantity, Price, Description, Images } = req.body;

  const newSpectacle = new Spectacle({ Title, Brand, Quantity, Price, Description, Images })

  try {
    await newSpectacle.save();

    res.status(201).json(newSpectacle);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export const updateSpectacle = async (req, res) => {
  const { id } = req.params;
  const { Title, Brand, Quantity, Price, Description, Images } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No spectacle with id: ${id}`);

  const updatedSpectacle = { Title, Brand, Quantity, Price, Description, Images };

  await Spectacle.findByIdAndUpdate(id, updatedSpectacle, { new: true });

  res.json(updatedSpectacle);
}

export const deleteSpectacle = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No spectacle with id: ${id}`);

  await Spectacle.findByIdAndRemove(id);

  res.json({ message: "Spectacle deleted successfully." });
}

export const uploadImage = async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }
  try {
    const file = req.files.file;
    let filename = Date.now() + file.name;
    await file.mv(`${__dirname}/../../../../frontend/public/img/spec_img/${filename}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      res.json({ fileName: filename, filePath: `/spec_img/${filename}` });
    });
  } catch (e) {
    res.status(400).send({ message: "Error uploading image!", error: e.toString(), req: req.body });
  }
}

export const deleteImage = (req, res) => {
  try {
    const { id } = req.params;
    fs.unlinkSync(`${__dirname}/../../../../frontend/public/img/spec_img/${id}`);

    res.status(201).send({ message: "Image deleted" });

  } catch (e) {
    res.status(400).send({ message: "Error deleting image!", error: e.toString(), req: req.body });
  }
};

export default router;

