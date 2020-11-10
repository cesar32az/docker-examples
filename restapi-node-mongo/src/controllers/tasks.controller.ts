import { RequestHandler } from "express";
import Task, { ITask } from "../models/Task";

export const createTask: RequestHandler = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description)
      return res.status(401).json({ message: "faltan datos" });

    const newTask: ITask = new Task({ title, description });
    const taskSaved = await newTask.save();
    return res
      .status(200)
      .json({ message: "Tarea creada con exito", taskSaved });
  } catch (error) {
    console.log(error);
  }
};

export const getTasks: RequestHandler = async (req, res) => {
  try {
    const tasks = await Task.find();
    if (!tasks)
      return res.status(400).json({ message: "No hay ninguna tarea..." });
    return res.json({ message: "Tareas: ", tasks });
  } catch (error) {
    console.log(error);
  }
};

export const getTaskById: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findById(id);
    if (!task) return res.status(400).json({ message: "No existe la tarea" });
    return res.status(200).json({ task });
  } catch (error) {
    console.log(error);
  }
};
export const deleteTask: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findByIdAndDelete(id);
    if (!task) return res.status(400).json({ message: "No existe la tarea" });
    return res.status(200).json({ task });
  } catch (error) {
    console.log(error);
  }
};
export const updateTask: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      {
        title,
        description,
      },
      { new: true }
    );
    return res.status(200).json({ message: "Tarea actualizada", updatedTask });
  } catch (error) {
    console.log(error);
  }
};
