import mongoose from 'mongoose';

const customSpectacleSchema = mongoose.Schema({
  'Model': {
    type: Array,
    required: true,
    value: [String]
  },
  'Front': {
    type: Array,
    required: true,
    value: [String]
  },
  'Temples': {
    type: Array,
    required: true,
    value: [String]
  },
  'Lenses': {
    type: Array,
    required: true,
    value: [String]
  },
  'Price': {
    type: String,
    required: true
  }
})

var CustomSpectacle = mongoose.model('CustomSpectacle', customSpectacleSchema);

export default CustomSpectacle;