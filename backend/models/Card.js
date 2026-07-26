import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    title: {
      type: String,
      default: "Untitled Card",
      trim: true
    },
    holderDetails: {
      name: { type: String, default: "", trim: true },
      designation: { type: String, default: "", trim: true },
      idNumber: { type: String, default: "", trim: true },
      organization: { type: String, default: "", trim: true },
      email: { type: String, default: "", trim: true },
      phone: { type: String, default: "", trim: true },
      bloodGroup: { type: String, default: "", trim: true },
      issueDate: { type: String, default: "" },
      expiryDate: { type: String, default: "" },
      photoUrl: { type: String, default: "" },
      logoUrl: { type: String, default: "" }
    },
    designConfig: {
      templateId: { type: String, default: "corporate" },
      primaryColor: { type: String, default: "#1e3a8a" },
      secondaryColor: { type: String, default: "#3b82f6" },
      textColor: { type: String, default: "#1f2937" },
      showQrCode: { type: Boolean, default: true },
      orientation: { type: String, default: "vertical" }
    },
    qrCodeData: {
      type: String,
      default: ""
    },
    cardImage: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

cardSchema.index({ user: 1, createdAt: -1 });

const Card = mongoose.model("Card", cardSchema);

export default Card;
