"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookingController_1 = require("../controllers/bookingController");
const router = (0, express_1.Router)();
router.post("/", bookingController_1.createBooking);
router.delete("/:id", bookingController_1.deleteBooking);
router.get("/", bookingController_1.getAllBookings);
router.put("/:id", bookingController_1.updateBooking);
exports.default = router;
