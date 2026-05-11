/*
|-----------------------------------------
| setting up Model for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2026
|-----------------------------------------
*/

import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IRevalidatePath extends Document {
  path: string;
  createdAt: Date;
  updatedAt: Date;
}

const RevalidatePathSchema = new Schema<IRevalidatePath>(
  {
    path: { type: String, required: true, unique: true, trim: true },
  },
  { timestamps: true },
);

const RevalidatePath: Model<IRevalidatePath> =
  mongoose.models.RevalidatePath || mongoose.model<IRevalidatePath>('RevalidatePath', RevalidatePathSchema);

export default RevalidatePath;
