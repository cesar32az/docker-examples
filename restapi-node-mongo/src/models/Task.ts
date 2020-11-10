import { Schema, model, Document } from "mongoose";

export interface ITask extends Document {
  title: string;
  description: string;
}

const taskSchema = new Schema(
  {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<ITask>("Task", taskSchema);
