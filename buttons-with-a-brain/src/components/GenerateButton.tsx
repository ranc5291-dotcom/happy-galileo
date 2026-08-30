import { Sparkles, Loader2, Check, RefreshCw } from 'lucide-react';
import type { ButtonState } from '../types';

interface GenerateButtonProps {
  state: ButtonState;
  onClick: () => void;
}

export function GenerateButton({ state, onClick }: GenerateButtonProps) {
  const isIdle = state === 'idle';
  const isLoading = state === 'loading';
  const isSuccess = state === 'success';
  const isError = state === 'error';
  const isDisabled = state === 'disabled';

  return (
    <button
      className={`generate-btn state-${state}`}
      onClick={onClick}
      disabled={isLoading || isDisabled}
      aria-busy={isLoading}
      aria-disabled={isDisabled}
    >
      <div className="btn-content">
        {isIdle && (
          <>
            <Sparkles className="icon" size={18} aria-hidden="true" />
            <span>Generate</span>
          </>
        )}
        {isLoading && (
          <>
            <Loader2 className="icon spinner" size={18} aria-hidden="true" />
            <span>Generating...</span>
          </>
        )}
        {isSuccess && (
          <>
            <Check className="icon" size={18} aria-hidden="true" />
            <span>Generated</span>
          </>
        )}
        {isError && (
          <>
            <RefreshCw className="icon" size={18} aria-hidden="true" />
            <span>Retry</span>
          </>
        )}
        {isDisabled && (
          <>
            <Sparkles className="icon" size={18} aria-hidden="true" />
            <span>Generate</span>
          </>
        )}
      </div>
    </button>
  );
}
