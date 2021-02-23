import { Todo } from './todo';

const myTodoItem = new Todo({
    priority: 1,
    text: 'Мое пробное туду',
    dedline: '20.01.2021'
});

console.log(myTodoItem);