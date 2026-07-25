import { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';

export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') || window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDark = (event?: React.MouseEvent) => {
    const isAppearanceTransition = document.startViewTransition
      && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isAppearanceTransition || !event) {
      flushSync(() => {
        setIsDark(!isDark);
        if (!isDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      });
      return;
    }

    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );

    const isGoingDark = !isDark;
    const transitionClass = isGoingDark ? 'theme-transition-to-dark' : 'theme-transition-to-light';
    
    document.documentElement.classList.add(transitionClass);

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setIsDark(isGoingDark);
        if (isGoingDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      });
    });

    transition.ready.then(() => {
      const clipPath = isGoingDark 
        ? [`circle(${endRadius}px at ${x}px ${y}px)`, `circle(0px at ${x}px ${y}px)`]
        : [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];
        
      const pseudoElement = isGoingDark 
        ? '::view-transition-old(root)' 
        : '::view-transition-new(root)';

      document.documentElement.animate(
        {
          clipPath: clipPath,
        },
        {
          duration: 500,
          easing: 'ease-in-out',
          pseudoElement: pseudoElement,
          fill: 'forwards',
        }
      );
    });

    transition.finished.finally(() => {
      document.documentElement.classList.remove(transitionClass);
    });
  };

  return { isDark, toggleDark };
}
