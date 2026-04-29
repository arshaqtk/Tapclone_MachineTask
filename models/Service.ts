import mongoose, { Schema, model, models } from 'mongoose';

const ServiceSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: false,
  }
}, { timestamps: true, versionKey: false });

const Service = models.Service || model('Service', ServiceSchema);

export default Service;
