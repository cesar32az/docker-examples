"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    title: {
        type: "string",
        required: true,
    },
    description: {
        type: "string",
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});
exports.default = mongoose_1.model("Task", taskSchema);
