import { Router } from 'express';

import { ToDo } from '../models/todos';

let todos: ToDo[] = [];

const router = Router();

router.get("/", (req, res, next) => {
    res.status(200).json({todos: todos});
});

router.post("/post", (req, res, next) => {
    const newToDo: ToDo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };

    todos.push(newToDo);
    res.status(200).json({todos: todos});
});

router.post("/delete/:id", (req, res, next) => {
    const id = req.params.id;
    todos= todos.filter(item => item.id !== id);

    res.status(200).json({todos: todos});
});

router.post("/edit/:id", (req, res, next) => {
    const id = req.params.id;
    const index = todos.findIndex(item => item.id === id);

    if(index) {
        todos[index] = {id: todos[index].id, text: req.body.text};
        res.status(200).json({todos: todos});
    } else {
        res.status(404);
    }
})

export default router;