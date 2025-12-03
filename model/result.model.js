const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema(
  {
    userId: {
        type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    username:{
    type:String,
    required:true
    },

    score: {
      type: Number,
      required: true,
    },

    totalQuestions: {
      type: Number,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const resultModel = mongoose.model("result",ResultSchema)
module.exports = resultModel
