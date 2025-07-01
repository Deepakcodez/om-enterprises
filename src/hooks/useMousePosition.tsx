import React from 'react';

/**
 * Hook to track the current mouse position.
 *
 * @returns The current mouse position, or `null` if the user is not hovering over the window.
 */
const useMousePosition = (): { x: number | null; y: number | null } => {
  const [mousePosition, setMousePosition] = React.useState<{
    x: number | null;
    y: number | null;
  }>({ x: null, y: null });

  React.useEffect(() => {
    
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;



