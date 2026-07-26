import { Router } from "express";
import { authenticate } from "../middleware/auth.js";
import Card from "../models/Card.js";

const router = Router();

// GET all cards for logged-in user
router.get("/", authenticate, async (req, res) => {
  try {
    const cards = await Card.find({ user: req.user.userId }).sort({ createdAt: -1 });
    res.json({
      success: true,
      count: cards.length,
      cards
    });
  } catch (error) {
    console.error("Fetch cards error:", error);
    res.status(500).json({ success: false, message: "Failed to fetch cards" });
  }
});

// GET single card by ID
router.get("/:id", authenticate, async (req, res) => {
  try {
    const card = await Card.findOne({ _id: req.params.id, user: req.user.userId });
    if (!card) {
      return res.status(404).json({ success: false, message: "Card not found" });
    }
    res.json({ success: true, card });
  } catch (error) {
    console.error("Fetch card detail error:", error);
    res.status(500).json({ success: false, message: "Failed to fetch card details" });
  }
});

// CREATE a new ID card
router.post("/", authenticate, async (req, res) => {
  try {
    const { title, holderDetails, designConfig, qrCodeData, cardImage } = req.body;

    const card = new Card({
      user: req.user.userId,
      title: title || `${holderDetails?.name || 'ID'}'s Card`,
      holderDetails: holderDetails || {},
      designConfig: designConfig || {},
      qrCodeData: qrCodeData || "",
      cardImage: cardImage || ""
    });

    await card.save();

    res.status(201).json({
      success: true,
      message: "ID Card saved successfully",
      card
    });
  } catch (error) {
    console.error("Save card error:", error);
    res.status(500).json({ success: false, message: "Failed to save ID Card" });
  }
});

// DELETE an ID card
router.delete("/:id", authenticate, async (req, res) => {
  try {
    const card = await Card.findOneAndDelete({ _id: req.params.id, user: req.user.userId });
    if (!card) {
      return res.status(404).json({ success: false, message: "Card not found or unauthorized" });
    }
    res.json({ success: true, message: "Card deleted successfully" });
  } catch (error) {
    console.error("Delete card error:", error);
    res.status(500).json({ success: false, message: "Failed to delete card" });
  }
});

// BULK save cards
router.post("/bulk", authenticate, async (req, res) => {
  try {
    const { cardsData } = req.body; // Array of card objects

    if (!Array.isArray(cardsData) || cardsData.length === 0) {
      return res.status(400).json({ success: false, message: "Invalid cards array" });
    }

    const cardsToInsert = cardsData.map(c => ({
      user: req.user.userId,
      title: c.title || `${c.holderDetails?.name || 'Bulk'}'s Card`,
      holderDetails: c.holderDetails || {},
      designConfig: c.designConfig || {},
      qrCodeData: c.qrCodeData || "",
      cardImage: c.cardImage || ""
    }));

    const createdCards = await Card.insertMany(cardsToInsert);

    res.status(201).json({
      success: true,
      message: `${createdCards.length} ID Cards created successfully`,
      count: createdCards.length
    });
  } catch (error) {
    console.error("Bulk save cards error:", error);
    res.status(500).json({ success: false, message: "Failed to save bulk cards" });
  }
});

export default router;
