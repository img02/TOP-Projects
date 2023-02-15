// the logic for the todo list

class ToDoItem {
    constructor(name, description, date, done) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.done = done;
    }
}

const toDo = (() => {
    let list = [
        new ToDoItem("wake up.", "you're asleep!", "01/01/1999", false),
        new ToDoItem("shopping.", "get some food.", "01/01/1999", false),
        new ToDoItem("study.", "exams soon.", "01/01/1999", false),
        new ToDoItem(
            "walk the dog.",
            "but.. i don't have one?",
            "01/01/1999",
            true
        ),
        new ToDoItem(
            "seriously, wake up.",
            "this is all a dream",
            "01/01/1999",
            false
        ),
        new ToDoItem("please wake up.", "we miss you", "01/01/1999", true)
    ];

    const addItem = (item) => {
        console.log(
            `button clicked: Creating new list item.... ${item.name}: ${item.description} : ${item.date} : ${item.done}`
        );
        // validate item?
        list.push(item);
    };
    const deleteItem = (i) => {
        console.log(`${i} delete button pressed~!`);
        if (i === 0) list.shift();
        else if (i === list.length - 1) list.pop();
        else {
            const start = list.slice(0, i);
            const end = list.slice(i + 1);
            list = start.concat(end);
        }
    };
    const getList = () => list;

    return { addItem, deleteItem, getList };
})();

export default toDo;
