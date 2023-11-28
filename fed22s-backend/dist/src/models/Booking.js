"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = exports.bookingSchema = void 0;
const mongoose_1 = require("mongoose");
exports.bookingSchema = new mongoose_1.Schema({
    people: { type: Number, required: true },
    date: { type: String, required: true },
    tables: { type: Number, required: true },
    sitting: { type: String, required: true },
    guest: { type: {}, required: true },
});
exports.Booking = (0, mongoose_1.model)("Booking", exports.bookingSchema);
