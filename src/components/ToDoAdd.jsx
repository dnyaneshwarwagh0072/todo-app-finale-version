import { useState, useRef } from "react";

function ToDoAdd({ newData }) {
    const [newName, setNewName] = useState("");
    const [newDate, setNewDate] = useState("");

    const inputRef = useRef("");

    const handleNewName = (e) => {
        setNewName(e.target.value);
    }

    const handleNewDate = (e) => {
        setNewDate(e.target.value);
    }

    const handleNewAddData = () => {
        newData(newName, newDate);
        setNewName("");
        setNewDate("");
        inputRef.current.focus();
    }

    return (
        <div className="row items-container add-css">
            <div className="col-5 ">
                <input
                    className="input-css"
                    type="text"
                    placeholder="Enter ToDo here"
                    value={newName}
                    ref={inputRef}
                    onChange={handleNewName}
                />
            </div>
            <div className="col-5">
                <input
                    className="input-css"
                    type="date"
                    value={newDate}
                    onChange={handleNewDate}
                />
            </div>
            <div className="col-2">
                <button
                    type="button"
                    className="btn btn-success kg-btn"
                    onClick={handleNewAddData}
                >
                    Add
                </button>
            </div>
        </div>
    )
}
export default ToDoAdd;
