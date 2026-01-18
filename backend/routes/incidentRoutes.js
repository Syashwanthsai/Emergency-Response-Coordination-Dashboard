import express from "express";
import Incident from "../models/Incident.js";
const router = express.Router();

router.post("/", async (req,res)=>{
 const {description,lat,lng}=req.body;
 const incident = await Incident.create({
  description,
  severity:"high",
  location:{type:"Point",coordinates:[lng,lat]}
 });
 res.json(incident);
});

router.get("/", async(req,res)=>{
 res.json(await Incident.find());
});

export default router;
