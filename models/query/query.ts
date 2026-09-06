import mongoose from 'mongoose';
const { Schema } = mongoose;


const querySchema = new Schema({
  title: String,
  email: String,
  message: String,
  subject: String,
  date: { type: Date, default: Date.now },
});


export const Query = mongoose.models.Query || mongoose.model('Query', querySchema);
