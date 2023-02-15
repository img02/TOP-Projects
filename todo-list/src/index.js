// The manager that composes of the todo and view logic objects

import viewManager from "./view";
import toDo from "./todo";
import "./style.css";

const testData = [
    { name: "item 1", description: "description one", date: "todo" },
    {
        name: "item 2",
        description: "This is an item I need to finish",
        date: "todo"
    },
    { name: "item 3", description: "ughhhhhhh", date: "todo" },
    {
        name: "item 4",
        description: "I'm too lazy to finish this",
        date: "todo"
    },
    { name: "item 5", description: "gotta do this", date: "2023" }
];

// pass through logic's delete, add, getList functions
viewManager.startUp(toDo.deleteItem, toDo.addItem, toDo.getList);
// pass through todo logics delete function later
// viewManager.updateView(testData);
