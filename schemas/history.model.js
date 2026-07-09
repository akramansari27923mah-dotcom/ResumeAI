import mongoose from "mongoose";

const historySchema = new mongoose.Schema(
  {
    resume: {
      type: Object,
      required: true,
      trim: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

export const historyModel =
  mongoose.models.History || mongoose.model("History", historySchema);
