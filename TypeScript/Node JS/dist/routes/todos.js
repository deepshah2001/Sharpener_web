"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post("/post", (req, res, next) => {
    const body = req.body;
    const newToDo = {
        id: new Date().toISOString(),
        text: body.text,
    };
    todos.push(newToDo);
    res.status(200).json({ todos: todos });
});
router.post("/delete/:id", (req, res, next) => {
    const params = req.params;
    const id = params.id;
    todos = todos.filter(item => item.id !== id);
    res.status(200).json({ todos: todos });
});
router.post("/edit/:id", (req, res, next) => {
    const params = req.params;
    const body = req.body;
    const id = params.id;
    const index = todos.findIndex(item => item.id === id);
    if (index) {
        todos[index] = { id: todos[index].id, text: body.text };
        res.status(200).json({ todos: todos });
    }
    else {
        res.status(404);
    }
});
exports.default = router;
