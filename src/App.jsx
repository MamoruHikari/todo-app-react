import { useState } from "react"
import Input from "./Input"
import Item from "./Item"

function App() {
  const [item, setItem] = useState("")
  const [array, setArray] = useState([])

  function handleInput(event) {
    setItem(event.target.value)
  }

  function handleClick() {
    if(!item.trim()) return
    setArray(prevState => [...prevState, { id: Date.now(), text: item, done: false }])
    setItem("")
  }

  function toggleItem(id) {
    setArray(prevState =>
      prevState.map(item =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    )
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Input 
        onChange={handleInput}
        value={item}
        onClick={handleClick}
      />
      <div>
        <ul>
          {array.map(item =>
            <Item 
              key={item.id}
              text={item.text}
              isDone={item.done}
              onClick={() => toggleItem(item.id)}
            />
          )}
        </ul>
    </div>
  </div>
  )
}

export default App
