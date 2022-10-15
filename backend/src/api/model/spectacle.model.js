import mongoose from 'mongoose';

const spectacleSchema = mongoose.Schema({
  'Title': { type: String, required: true },
  'Brand': { type: String, required: true },
  'Quantity': { type: String, required: true },
  'Price': { type: String, required: true },
  'Description': { type: String, required: true },
  'Images': { type: Array, required: true, value: [String] },
})

var Spectacle = mongoose.model('Spectacle', spectacleSchema);

export default Spectacle;