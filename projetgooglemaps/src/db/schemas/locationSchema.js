import { Schema } from "mongoose"

export const locationSchema = new Schema({
    locationName: {
      type: String,
    },
    locationAddress: {
      type: String,
    },
    locationCity: {
      type: String,
    },
    locationPostalCode: {
      type: Number,
    },
    locationCountry: {
      type: String,
    },
    locationType: {
      type: String,
    },  
    restaurantType: {
      type: String,
    },
    museumArtisticMovement: {
      type: String,
    },
    artType: {
      type: String,
    },
    barType: {
      type: String,
    },
    parkType: {
      type: String,
    },
    parkPrivacy: {
      type: Boolean,
    },
    starRating: {
      type: String,
    },
    price: {
      type: String,
    },
    isFree: {
      type: Boolean,
    },
});

export default locationSchema;

