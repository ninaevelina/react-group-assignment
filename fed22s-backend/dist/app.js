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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const bookingRoutes_1 = __importDefault(require("./src/routes/bookingRoutes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((req, res, next) => {
    console.log(`processing ${req.method} request to ${req.path}`);
    console.log(req.path);
    next();
});
app.use((0, cors_1.default)({
    origin: "https://react-group-assignment-frontend.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use("/api/v1/booking", bookingRoutes_1.default);
app.use((req, res) => {
    const isApiPath = req.path.startsWith("/api/");
    if (isApiPath)
        return res.sendStatus(404);
    return;
});
const port = process.env.PORT || 5000;
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            mongoose_1.default.set("strictQuery", false);
            const conn = yield mongoose_1.default.connect(process.env.MONGODB_URI || "");
            app.listen(port, () => {
                console.log(`server running on http://localhost:${port}`);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
run();
