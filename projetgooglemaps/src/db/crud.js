import { locationModel } from "./models/locationModel.js";

export const createLocation = async ( values ) => {
   const newLocation = new locationModel( values )
   await newLocation.save()
   return newLocation
 }
 
 export const readLocations = async () => await locationModel.find()
 export const readLocation = async (locationId) => await locationModel.findById(locationId)
 export const updateLocation = async (
   locationId,
   { values },
 ) => {
   const input = {
     values
   }
   const updatedLocation = await locationModel.findByIdAndUpdate(locationId, input, {
     returnDocument: "after",
   })
  
   return updatedLocation
 }
  