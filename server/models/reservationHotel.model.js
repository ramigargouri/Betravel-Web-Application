const mongoose = require("mongoose");

const ReservationHotelSchema = new mongoose.Schema({
  hotel: {
    type: JSON,
  },
  user: {
    type: JSON,
  },
  rooms: {
    type: JSON,
  },
  details: {
    type: JSON,
  },
  periode: {
    type: Array,
  },
  nuits: {
    type: Number,
  },
  price: {
    type: Number,
  },
  status: {
    type: String,
  },
  
});
module.exports = mongoose.model("ReservationsHotel", ReservationHotelSchema);