import React, { useState } from "react"
import { useToDo } from "../hooks"

export default () => {
  const { todos, addToDo, removeToDo, finishToDo } = useToDo()
  const [inputText, setInputText] = useState("")
 



  function handleSubmit(e) {
    e.preventDefault()
    setInputText("")
    addToDo(inputText)
  }

  function handleComp(id) {
    finishToDo(id)
  }

  return (
    <div className="container">
      <div className="form-container">
        <p className="form-header">todos</p>
        <form className="form" onSubmit={handleSubmit}>
          

          <input
            placeholder="What needs to be done?"
            className="todo-input"
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></input>
          {todos.map((item) => (
            <div className="full-list-item">
              
              <li className="todo-list-item">
                <div>
                <input 
                  className="checkbox"
                  key={item.id}
                  type="checkbox"
                  onClick={() => handleComp(item.id)}
                ></input>
                <span className={item.completed === true ? "completed" : ""}>{item.input}</span>
                </div>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={(e) => removeToDo(item.id)}
                >
                  X
                </button>
              </li>
            </div>
          ))}
        </form>
      </div>
    </div>
  )
}
