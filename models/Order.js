import { model, models, Schema } from "mongoose";

const OrderSchema = new Schema(
  {
    userEmail: String,
    line_items: Object,
    name: String,
    email: String,
    phoneNumber: String,
    city: String,
    postalCode: String,
    address: String,
    country: String,
    paid: Boolean,
  },
  {
    timestamps: true,
  }
);

export const Order = models?.Order || model("Order", OrderSchema);
