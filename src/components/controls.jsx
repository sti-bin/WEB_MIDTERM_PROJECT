import "./controls.jsx";
import "./clockstyles.css";

const Controls = ({ isRunning, onStart, onStop, toggleFormat, is24Hour }) => {
  return (
    <div className="controls">
      <button onClick={onStart} disabled={isRunning} className="start">
        Start
      </button>
      <button onClick={onStop} disabled={!isRunning} className="stop">
        Stop
      </button>
      <button onClick={toggleFormat} className="format-toggle">
        {is24Hour ? "12-hour" : "24-hour"}
      </button>
    </div>
  );
};

export default Controls;
