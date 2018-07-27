import mongoose from 'mongoose';

const Schema = mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: String,
  text: String,
  owner: String,
  checked: Boolean,
  _id: {
    type: String,
    default: uniqid,
  },
});

export default mongoose.model('Todo', Schema, 'tasks');
