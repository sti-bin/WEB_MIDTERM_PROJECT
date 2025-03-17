import { useState } from "react";
import LiveClock from "./components/liveclock";
import Controls from "./components/controls";
import "./App.css";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [is24Hour, setIs24Hour] = useState(false);

  return (
    <div className="app">
      <LiveClock isRunning={isRunning} is24Hour={is24Hour} />
      <Controls
        isRunning={isRunning}
        onStart={() => setIsRunning(true)}
        onStop={() => setIsRunning(false)}
        toggleFormat={() => setIs24Hour((prev) => !prev)}
        is24Hour={is24Hour}
      />
    </div>
  );
}

export default App;
