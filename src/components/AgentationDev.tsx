import { useEffect, useState } from 'react';
import { Agentation } from 'agentation';

/**
 * Dev-only Agentation visual feedback overlay.
 * Mounts floating toolbar in development mode for interactive DOM annotation.
 */
export function AgentationDev() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (import.meta.env.DEV) {
      setMounted(true);
    }
  }, []);

  if (!mounted || !import.meta.env.DEV) {
    return null;
  }

  return <Agentation copyToClipboard={true} />;
}
