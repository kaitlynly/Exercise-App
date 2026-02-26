import React, { useEffect, useState } from "react"

const pad2 = (num) => String(num).padStart(2, "0")

const DurationExercise = ({ name }) => {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return

    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [running])

  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  const display = `${pad2(mins)}:${pad2(secs)}`

  const handleReset = () => {
    setRunning(false)
    setSeconds(0)
  }

  return (
    <div>
      <h1>{name}</h1>

      <p>Time: {display}</p>

      {!running ? (
        <button onClick={() => setRunning(true)}>Start</button>
      ) : (
        <button onClick={() => setRunning(false)}>Stop</button>
      )}

      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default DurationExercise