import mongoose from 'mongoose';

const Schema = mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: String,
  text: String,
  owner: String,
});

export default mongoose.model('Todo', Schema);
