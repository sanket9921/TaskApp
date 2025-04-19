const Task = require('../models/Task');
const logger = require('../utils/logger');

exports.createTask = async (req, res) => {
    try {
        logger.info("create task request received");
        const task = new Task({ ...req.body, userId: req.userId });
        task.save()
        logger.info("task created successfully", task);
        res.json(task)

    } catch (error) {
        logger.error("server error during creating task", error);
        res.status(500).json({ message: "Internel server error" })
    }

}

exports.getAllTask = async (req, res) => {

    try {
        logger.info("get all task request received");
        const tasks = await Task.find({ userId: req.userId });
        logger.info("all task fetched successfully", tasks);
        res.json(tasks);

    } catch (error) {
        logger.error("server error during getting all task", error);
        res.status(500).json({ message: "Internet server error" })
    }
}

exports.deleteTask = async (req, res) => {
    try {
        logger.info("delete task request received");
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            logger.warn("task not found");
            return res.status(404).json({ message: "task not found" })
        }
        logger.info("task deleted successfully", task);
        res.json(task);

    } catch (error) {
        logger.error("server error during deleting task", error);
        res.status(500).json({ message: "Internet server error" })
    }
}

exports.updateTask = async (req, res) => {
    try {
        logger.info("update task request received");
        const task = await Task.findOneAndUpdate(
            { _id: req.params.id, userId: req.userId },
            req.body,
            { new: true }
        );
        if (!task) {
            logger.warn("task not found");
            return res.status(404).json({ message: "task not found" })
        }
        logger.info("task updated successfully", task);
        res.json(task);
    }
    catch (error) {
        logger.error("server error during updating task", error);
        res.status(500).json({ message: "Internet server error" })
    }
}

exports.updateTaskStatus = async (req, res) => {
    try {
        logger.info("update task status request received");
        const task = await Task.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
        if (!task) {
            logger.warn("task not found");
            return res.status(404).json({ message: "task not found" })
        }
        logger.info("task status updated successfully", task);
        res.json(task);
    }
    catch (error) {
        logger.error("server error during updating task status", error);
        res.status(500).json({ message: "Internet server error" })
    }
}