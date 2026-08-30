interface StateControlsProps {
  onTestSuccess: () => void;
  onTestError: () => void;
  onReset: () => void;
}

export function StateControls({ onTestSuccess, onTestError, onReset }: StateControlsProps) {
  return (
    <div className="state-controls-wrapper">
      <h3 className="controls-heading">Test states</h3>
      <div className="controls-row">
        <button className="control-btn" onClick={onTestSuccess}>Test Success</button>
        <button className="control-btn" onClick={onTestError}>Test Error</button>
        <button className="control-btn" onClick={onReset}>Reset</button>
      </div>
    </div>
  );
}
