import mongoose from "mongoose";
import moongooseAgregatePaginate from "mongoose-aggregate-paginate-v2"


const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    thumbnail:{
      type:String, // cloudinary url 
      required: true, 
    },
    description: {
      type: String,
      required: true,
    },
    regCost: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
      validate: {
        validator: function (value) {
          return value.toFixed(2) === value.toString();
        },
        message: "regCost must have up to two decimal places",
      },
    },
    date: {
      type: Date,
      required: true,
    },
    venue: {
      type: String,
      required: true,
    },
    mode: {
      type: String,
      enum: ["online", "offline", "hybrid"], // Restrict to these modes
      required: true,
    },
    regCount:{
      type:Number,
      default:0,
    },
  },
  { timestamps: true }
);

eventSchema.plugin(moongooseAgregatePaginate)

export const Event = mongoose.model("Event", eventSchema);
