const localStorage = (() => {
    const storage = window.localStorage;
    const loadStorage = () => storage.getItem("todo");
    const saveStorage = (value) => storage.setItem("todo", value);
    return { loadStorage, saveStorage };
})();

export default localStorage;
