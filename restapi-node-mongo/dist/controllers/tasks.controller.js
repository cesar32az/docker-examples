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
exports.updateTask = exports.deleteTask = exports.getTaskById = exports.getTasks = exports.createTask = void 0;
const Task_1 = __importDefault(require("../models/Task"));
exports.createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description } = req.body;
        if (!title || !description)
            return res.status(401).json({ message: "faltan datos" });
        const newTask = new Task_1.default({ title, description });
        const taskSaved = yield newTask.save();
        return res
            .status(200)
            .json({ message: "Tarea creada con exito", taskSaved });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield Task_1.default.find();
        if (!tasks)
            return res.status(400).json({ message: "No hay ninguna tarea..." });
        return res.json({ message: "Tareas: ", tasks });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getTaskById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const task = yield Task_1.default.findById(id);
        if (!task)
            return res.status(400).json({ message: "No existe la tarea" });
        return res.status(200).json({ task });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const task = yield Task_1.default.findByIdAndDelete(id);
        if (!task)
            return res.status(400).json({ message: "No existe la tarea" });
        return res.status(200).json({ task });
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { title, description } = req.body;
        const updatedTask = yield Task_1.default.findByIdAndUpdate(id, {
            title,
            description,
        }, { new: true });
        return res.status(200).json({ message: "Tarea actualizada", updatedTask });
    }
    catch (error) {
        console.log(error);
    }
});
