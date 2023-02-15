// the logic for drawing the HTML UI
const listId = "description-list";
const addButtonId = "add-button";
const deleteButtonBaseId = "delete-button";
const modalId = "modal";
const modalContentId = "modal-content";
const nameInputId = "modal-name-input";
const descriptionInputId = "modal-description-input";
const dateInputId = "modal-date-input";
const inputButtonId = "modal-button";

const descriptionTextClass = "description-text";
const descriptionDateClass = "description-date";
const deleteButtonClass = "delete-button";
const descriptionDivClass = "description-div";
const modalInputClass = "modal-input";
const modalInputDivClass = "modal-input-div";

const deleteBtnText = "delete.";
const saveBtnText = "save.";

const viewManager = (() => {
    let deleteFunc;
    let addFunc;
    let getList;
    let updateLocalStorage;
    const body = document.getElementsByTagName("body")[0];
    const descriptionList = document.createElement("dl");
    descriptionList.id = listId;

    const addButton = document.createElement("button");
    addButton.id = addButtonId;
    addButton.textContent = "+";

    const modal = document.createElement("div");
    modal.id = modalId;

    function hideModal() {
        modal.style.display = "none";
    }
    function showModal() {
        modal.style.display = "block";
    }

    function subscribeDeleteButton(btn, index) {
        btn.addEventListener("click", () => {
            deleteFunc(index);
            updateView();
        });
    }

    function createItemDescription(item, i) {
        const btnId = `${deleteButtonBaseId}${i}`;
        const itemTerm = document.createElement("dt");
        itemTerm.innerText = item.name;

        // description will be a div flexbox flow row - for description, date, delete button?
        const itemDescription = document.createElement("dd");
        const div = document.createElement("div");
        const text = document.createElement("p");
        const date = document.createElement("p");
        const deleteBtn = document.createElement("button");

        text.textContent = item.description;
        date.textContent = item.date;
        deleteBtn.textContent = deleteBtnText;

        div.classList.add(descriptionDivClass);
        text.classList.add(descriptionTextClass);
        date.classList.add(descriptionDateClass);
        deleteBtn.classList.add(deleteButtonClass);
        deleteBtn.id = btnId;

        div.append(text, date, deleteBtn);
        itemDescription.append(div);
        descriptionList.append(itemTerm, itemDescription);

        // subscribe buttons click event
        subscribeDeleteButton(deleteBtn, i, deleteFunc);
    }

    // updates view to match todo state
    const updateView = () => {
        // clear list
        descriptionList.innerHTML = "";
        const arr = getList();
        // recreate each list item
        for (let i = 0; i < arr.length; i++) {
            createItemDescription(arr[i], i, deleteFunc);
        }
        descriptionList.append(addButton);
        updateLocalStorage(JSON.stringify(getList()));
    };

    function addItem(name, description, date) {
        const item = { name, description, date };
        addFunc(item);
        updateView();
    }

    function drawAddItemModal() {
        const modalDiv = document.createElement("div");
        modalDiv.id = modalContentId;

        // input 'form' (not using an actual form)
        const nameInput = document.createElement("input");
        const descriptionInput = document.createElement("input");
        const dateInput = document.createElement("input");
        const inputBtn = document.createElement("button");

        const nameInputName = document.createElement("p");
        const descriptionInputName = document.createElement("p");
        const dateInputName = document.createElement("p");

        const nameInputDiv = document.createElement("div");
        const descriptionInputDiv = document.createElement("div");
        const dateInputDiv = document.createElement("div");

        // names
        nameInputName.textContent = "name.";
        descriptionInputName.textContent = "description.";
        dateInputName.textContent = "date.";

        // ids
        nameInput.id = nameInputId;
        descriptionInput.id = descriptionInputId;
        dateInput.id = dateInputId;
        inputBtn.id = inputButtonId;

        // classes
        nameInput.classList.add(modalInputClass);
        descriptionInput.classList.add(modalInputClass);
        dateInput.classList.add(modalInputClass);
        nameInputDiv.classList.add(modalInputDivClass);
        descriptionInputDiv.classList.add(modalInputDivClass);
        dateInputDiv.classList.add(modalInputDivClass);

        // required -- not using form, so...
        nameInput.required = true;
        descriptionInput.required = true;
        dateInput.required = true;

        // type
        nameInput.type = "text";
        descriptionInput.type = "text";
        // dates are ToDo
        dateInput.type = "text";
        dateInput.placeholder =
            "dates not yet implemented. don't hold your breath.";

        inputBtn.textContent = saveBtnText;

        // when btn clicked, add item based in input values
        inputBtn.addEventListener("click", () => {
            addItem(nameInput.value, descriptionInput.value, dateInput.value);
            hideModal();
            nameInput.value = "";
            descriptionInput.value = "";
            dateInput.value = "";
        });

        nameInputDiv.append(nameInputName, nameInput);
        descriptionInputDiv.append(descriptionInputName, descriptionInput);
        dateInputDiv.append(dateInputName, dateInput);

        modalDiv.append(
            nameInputDiv,
            descriptionInputDiv,
            dateInputDiv,
            inputBtn
        );

        // modalDiv.append(
        //     nameInputName,
        //     nameInput,
        //     descriptionInputName,
        //     descriptionInput,
        //     dateInputName,
        //     dateInput,
        //     inputBtn
        // );
        modal.append(modalDiv);
        body.append(modal);
    }

    // adds the basic html for the description list
    function drawList() {
        body.append(descriptionList);
        drawAddItemModal();

        // just show the modal window
        addButton.addEventListener("click", () => {
            showModal();
        });
        // if modal window focused, hide
        window.onclick = (e) => {
            if (e.target === modal) {
                hideModal();
            }
        };
    }

    const startUp = (deleteFn, addFn, getListFn, updateLocalStorageFn) => {
        deleteFunc = deleteFn;
        addFunc = addFn;
        getList = getListFn;
        updateLocalStorage = updateLocalStorageFn;

        drawList();
        updateView();
    };

    return { startUp, updateView };
})();

export default viewManager;
