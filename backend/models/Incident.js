import mongoose from "mongoose";
const IncidentSchema = new mongoose.Schema({
  description: String,
  severity: String,
  location: { type: { type: String, default: "Point" }, coordinates: [Number] },
  reportedAt: { type: Date, default: Date.now }
});
IncidentSchema.index({ location: "2dsphere" });
export default mongoose.model("Incident", IncidentSchema);
