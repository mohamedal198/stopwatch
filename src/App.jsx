import { useState, useEffect } from "react";
import "./index.css";
function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Stopwatch</h2>
      <div className="text-5xl font-mono bg-gray-800 p-4 rounded-lg shadow-lg">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="mt-6 space-x-4">
        <button
          onClick={() => setRunning(!running)}
          className={`px-6 py-2 rounded-lg text-white font-semibold transition ${
            running
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {running ? "Stop" : "Start"}
        </button>
        <button
          onClick={() => setTime(0)}
          className="px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
export default App;
