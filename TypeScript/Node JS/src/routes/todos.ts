import { Router } from 'express';

import { ToDo } from '../models/todos';

type RequestBody = { text: string };
type RequestParams = { id: string };

let todos: ToDo[] = [];

const router = Router();

router.get("/", (req, res, next) => {
    res.status(200).json({todos: todos});
});

router.post("/post", (req, res, next) => {
    const body = req.body as RequestBody;

    const newToDo: ToDo = {
        id: new Date().toISOString(),
        text: body.text,
    };

    todos.push(newToDo);
    res.status(200).json({todos: todos});
});

router.post("/delete/:id", (req, res, next) => {
    const params = req.params as RequestParams;

    const id = params.id;
    todos= todos.filter(item => item.id !== id);

    res.status(200).json({todos: todos});
});

router.post("/edit/:id", (req, res, next) => {
    const params = req.params as RequestParams;
    const body = req.body as RequestBody;
    
    const id = params.id;
    const index = todos.findIndex(item => item.id === id);

    if(index) {
        todos[index] = {id: todos[index].id, text: body.text};
        res.status(200).json({todos: todos});
    } else {
        res.status(404);
    }
})

export default router;