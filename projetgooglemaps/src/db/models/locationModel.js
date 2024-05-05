import mongoose from "mongoose"
import { locationSchema } from "../schemas/locationSchema"

export const locationModel =
  mongoose.models.Location || mongoose.model("Location", locationSchema)