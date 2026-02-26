import React, { useState } from "react"

const RepetitionExercise = ({ name }) => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{name}</h1>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default RepetitionExercise