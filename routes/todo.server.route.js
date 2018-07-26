import express from 'express';
import * as todoController from '../controllers/todo.server.controller';

const router = express.Router();

router.route('/:id')
  .get(todoController.getTodo)
  .delete(todoController.deleteTodo);

router.route('/')
  .get(todoController.getTodos)
  .post(todoController.addTodo)
  .put(todoController.updateTodo);

export default router;
