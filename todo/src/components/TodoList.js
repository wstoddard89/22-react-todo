import React, { useState } from "react"
import { useToDo } from "../hooks"

export default () => {
  const { todos, addToDo, removeToDo, finishToDo } = useToDo()
  const [inputText, setInputText] = useState("")
  function handleSubmit(e) {
    e.preventDefault()
    addToDo(inputText)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>To Do List</h1>
        <input
          type="text"
          onChange={(e) => setInputText(e.target.value)}
        ></input>
        {todos.map((item) => (
        <li onClick={(e) => removeToDo(item.id)}>{item.input}</li>
      ))}
      </form>
    </div>
  )
}
