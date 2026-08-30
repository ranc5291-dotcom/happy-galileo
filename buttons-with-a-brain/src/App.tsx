import { useState, useRef, useEffect } from 'react';
import { GenerateButton } from './components/GenerateButton';
import { StateControls } from './components/StateControls';
import type { ButtonState } from './types';
import './index.css';

function App() {
  const [state, setState] = useState<ButtonState>('idle');
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const clearExistingTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleGenerate = () => {
    if (state === 'loading' || state === 'disabled') return;
    
    setState('loading');
    clearExistingTimeout();

    const delay = Math.floor(Math.random() * 1500) + 1000;
    
    timeoutRef.current = window.setTimeout(() => {
      const isError = Math.random() < 0.2;
      
      if (isError) {
        setState('error');
      } else {
        setState('success');
        timeoutRef.current = window.setTimeout(() => {
          setState('idle');
        }, 1500);
      }
    }, delay);
  };

  const forceSuccess = () => {
    clearExistingTimeout();
    setState('success');
    timeoutRef.current = window.setTimeout(() => {
      setState('idle');
    }, 1500);
  };

  const forceError = () => {
    clearExistingTimeout();
    setState('error');
  };

  const forceReset = () => {
    clearExistingTimeout();
    setState('idle');
  };

  return (
    <div className="app-container">
      <header className="page-header">
        <span className="label">FLYRank AI · FRONTEND AI ENGINEERING</span>
        <h1 className="main-title">Buttons with a Brain</h1>
        <h2 className="subtitle">Motion that communicates state, not decoration.</h2>
        <p className="description">
          An interactive demonstration of how a reusable AI action button communicates interaction, progress, success, and failure through intentional motion.
        </p>
      </header>

      <main className="demo-section">
        <div className="demo-card">
          <div className="card-header">
            <h3>AI Generation Control</h3>
            <p>Try the button or use the controls below to preview every state.</p>
          </div>
          
          <div className="button-container">
            <GenerateButton state={state} onClick={handleGenerate} />
          </div>

          <div className="controls-section">
            <StateControls 
              onTestSuccess={forceSuccess} 
              onTestError={forceError} 
              onReset={forceReset} 
            />
            
            <div className="status-panel">
              <span className="status-label">Current state</span>
              <div className={`status-indicator state-${state}`}>
                <span className="dot"></span>
                <span className="status-text">{state.toUpperCase()}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="disabled-demo">
          <h3>Disabled State Demo</h3>
          <div className="button-container">
            <GenerateButton state="disabled" onClick={() => {}} />
          </div>
        </div>

        <div className="lifecycle-timeline">
          <h3>Interaction lifecycle</h3>
          <div className="timeline-visual">
            <span>IDLE</span>
            <span className="arrow">↓</span>
            <span>HOVER / FOCUS</span>
            <span className="arrow">↓</span>
            <span>LOADING</span>
            <span className="arrow">↓</span>
            <span>SUCCESS / ERROR</span>
            <span className="arrow">↓</span>
            <span>IDLE</span>
          </div>
        </div>

        <div className="motion-decisions">
          <h3>Motion Decisions</h3>
          <p>
            I kept the interactions short so the interface feels responsive rather than animated for its own sake. Hover and focus transitions use roughly 150–200ms, while loading and result transitions use roughly 200–300ms. I use transform and opacity because they are compositor-friendly and avoid unnecessary layout changes. Error feedback uses a brief shake, but the error state remains visible even when reduced motion is enabled.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
