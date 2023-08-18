import React, { useState } from 'react';

const TodoCard = ({ todo, updateStatus, deleteTodo }) => {
    const [editing, setEditing] = useState(false);
    const [editedStatus, setEditedStatus] = useState(todo.status);

    // Toggling the Editing button
    const toggleEditing = () => {
        setEditing(!editing);
    }

    // Saving the Edited Status and Updating it in the Todo Card
    const saveEditedStatus = () => {
        updateStatus(todo.id, editedStatus);
        setEditing(false);
    }

    return (
        <div className="card mb-4">
            <div className="card-body">
                <p className="card-text">{todo.taskName}</p>
                <p className="card-text">{todo.description}</p>
                {editing ? (
                    <div>
                        <select value={editedStatus} onChange={(event) => setEditedStatus(event.target.value)}>
                            <option value="Not Completed">Not Completed</option>
                            <option value="Completed">Completed</option>
                        </select>
                        <button type="button" className="btn btn-success rounded px-3 py-0 mx-3" onClick={saveEditedStatus}>Save</button>
                    </div>
                ) : (
                    <div>
                        <p>Status: {todo.status}</p>
                        <div className="card-footer bg-white border-0 px-0">
                            <button type="button" className="btn btn-primary rounded-lg px-3 py-0 " onClick={toggleEditing}>Edit</button>
                            <button type="button" className="btn btn-danger rounded-lg px-2 py-0 mx-3" onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default TodoCard;
