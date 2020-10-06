// 1. imports
import { useSelector, useDispatch } from "react-redux"

// 2. action definitions
const ADD_TODO = "todo/ADD_TODO"
const DELETE_TODO = "todo/DELETE_TODO"
const COMPLETE_TODO = "todo/COMPLETE_TODO"

// 3. initial state
const initialState = {
  todos: [],
}

function generateId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

console.log(generateId())

// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: generateId(), input: action.payload }],
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      }
    case COMPLETE_TODO:
      return { ...state, todos: [...state.todos, action.payload] }
    default:
      return state
  }
}

// 5. action creators
function makeToDo(input) {
  return {
    type: ADD_TODO,
    payload: input,
  }
}

function deleteToDo(id) {
  return {
    type: DELETE_TODO,
    payload: id,
  }
}

function completeToDo(id) {
  return {
    type: COMPLETE_TODO,
    payload: id,
  }
}

// 6. custom hook
export function useToDo() {
  const dispatch = useDispatch()
  const todos = useSelector((app) => app.TodosState.todos)
  console.log(todos)
  const addToDo = (input) => dispatch(makeToDo(input))
  const removeToDo = (id) => dispatch(deleteToDo(id))
  const finishToDo = (id) => dispatch(completeToDo(id))
  return {
    todos,
    addToDo,
    removeToDo,
    finishToDo,
  }
}
