#!/usr/bin/env node
import inquirer from "inquirer";
async function main() {
    const Todo = [];
    let condition = true;
    while (condition) {
        const todoQuestion = await inquirer.prompt([
            {
                name: 'todo',
                type: 'input',
                message: 'Enter your Todo:'
            },
            {
                name: 'addMore',
                type: 'confirm',
                message: 'Do you want to add more Todo?',
                default: true
            }
        ]);
        Todo.push(todoQuestion.todo);
        console.log('Todo List:', Todo);
        condition = todoQuestion.addMore;
    }
    const updateQuestion = await inquirer.prompt({
        name: 'update',
        type: 'list',
        message: 'Do you want to update the Todo list?',
        choices: ['Add', 'Delete', 'No update']
    });
    if (updateQuestion.update === 'Add') {
        const addition = await inquirer.prompt({
            name: "newTodo",
            type: 'input',
            message: 'Enter the new Todo:'
        });
        Todo.push(addition.newTodo);
        console.log('Updated Todo list:', Todo);
    }
    else if (updateQuestion.update === 'Delete') {
        const deleteIndex = await inquirer.prompt({
            name: "index",
            type: 'number',
            message: 'Enter the index of the Todo item you want to delete:'
        });
        if (deleteIndex.index >= 0 && deleteIndex.index < Todo.length) {
            Todo.splice(deleteIndex.index, 1);
            console.log('Updated Todo list:', Todo);
        }
        else {
            console.log('Invalid index. Please enter a valid index.');
        }
    }
    else {
        console.log('No update to the Todo list.');
    }
}
main();
