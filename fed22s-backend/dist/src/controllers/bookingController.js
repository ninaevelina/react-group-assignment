"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBooking = exports.getAllBookings = exports.deleteBooking = exports.createBooking = void 0;
const Booking_1 = require("../models/Booking");
const createBooking = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { people, date, tables, sitting, guest } = req.body;
        const newBooking = yield Booking_1.Booking.create({
            people: people,
            date: date,
            tables: tables,
            sitting: sitting,
            guest: guest,
        });
        return res.status(201).json(newBooking);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json("Sorry, couldn't create a new booking");
    }
});
exports.createBooking = createBooking;
const deleteBooking = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookingId = req.params.id;
        yield Booking_1.Booking.findByIdAndDelete(bookingId);
        console.log("function has been run");
        return res.send("deleted").status(204);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json("Sorry, couldn't delete booking");
    }
});
exports.deleteBooking = deleteBooking;
const getAllBookings = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookings = yield Booking_1.Booking.find();
        const totalBookings = yield Booking_1.Booking.countDocuments();
        return res.status(200).json(bookings);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json("Sorry, couldn't get all bookings");
    }
});
exports.getAllBookings = getAllBookings;
const updateBooking = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookingId = req.params.id;
        const { people, date, sitting, guest } = req.body;
        const sort = { _id: bookingId };
        const update = {
            people: people,
            date: date,
            sitting: sitting,
            guest: guest,
        };
        let booking = yield Booking_1.Booking.findOneAndUpdate(sort, update, { new: true });
        return res.status(201).json(booking);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json("Sorry, couldn't update booking");
    }
});
exports.updateBooking = updateBooking;
