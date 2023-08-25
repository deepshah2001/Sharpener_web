"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post("/post", (req, res, next) => {
    const newToDo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newToDo);
    res.status(200).json({ todos: todos });
});
router.post("/delete/:id", (req, res, next) => {
    const id = req.params.id;
    todos = todos.filter(item => item.id !== id);
    res.status(200).json({ todos: todos });
});
router.post("/edit/:id", (req, res, next) => {
    const id = req.params.id;
    const index = todos.findIndex(item => item.id === id);
    if (index) {
        todos[index] = { id: todos[index].id, text: req.body.text };
        res.status(200).json({ todos: todos });
    }
    else {
        res.status(404);
    }
});
exports.default = router;
