import React, { useState } from "react"
import "./App.css"
import RepetitionExercise from "./components/RepetitionExercise"
import DurationExercise from "./components/DurationExercise"

function App() {
  // Menu of exercises (you can add more)
  const exercises = [
    { name: "Push-ups", type: "repetition" },
    { name: "Jumping Jacks", type: "repetition" },
    { name: "Plank", type: "duration" },
    { name: "Wall Sit", type: "duration" },
  ]

  // null = showing menu screen
  const [selectedExercise, setSelectedExercise] = useState(null)

  // SCREEN 1: menu screen
  if (!selectedExercise) {
    return (
      <div className="App">
        <h1>Exercise Tracker</h1>

        {exercises.map((ex) => (
          <button
            key={ex.name}
            onClick={() => setSelectedExercise(ex)}
            style={{ margin: "8px" }}
          >
            {ex.name}
          </button>
        ))}
      </div>
    )
  }

  // SCREEN 2: exercise screen (render based on type)
  return (
    <div className="App">
      {selectedExercise.type === "repetition" ? (
        <RepetitionExercise name={selectedExercise.name} />
      ) : (
        <DurationExercise name={selectedExercise.name} />
      )}
    </div>
  )
}

export default App