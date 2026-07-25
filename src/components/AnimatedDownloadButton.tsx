import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download } from 'lucide-react';
import clsx from 'clsx';

interface AnimatedDownloadButtonProps {
  href: string;
  className?: string; // used for the outer wrapper size/layout
  buttonClassName?: string; // used for the idle button styles
}

export default function AnimatedDownloadButton({ href, className, buttonClassName }: AnimatedDownloadButtonProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const buttonRef = useRef<HTMLDivElement>(null);
  const [btnHeight, setBtnHeight] = useState(32);

  const handleClick = (e: React.MouseEvent) => {
    if (status !== 'idle') {
      e.preventDefault();
      return;
    }
    
    if (buttonRef.current) {
      setBtnHeight(buttonRef.current.offsetHeight);
    }

    e.preventDefault();
    setStatus('loading');
    
    setTimeout(() => {
      setStatus('success');
      
      const link = document.createElement('a');
      link.href = href;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setTimeout(() => {
        setStatus('idle');
      }, 2000);
    }, 2400); // 400ms shrink + 2000ms fill
  };

  return (
    <div className={clsx("relative flex items-center justify-center cursor-pointer", className)} onClick={handleClick} ref={buttonRef}>
      {/* Invisible placeholder to maintain layout dimensions so other icons don't move */}
      <div className={clsx("opacity-0 pointer-events-none flex items-center justify-center gap-2 whitespace-nowrap", buttonClassName)}>
        <Download className="w-4 h-4" /> 
        <span>Download CV</span>
      </div>

      <motion.div
        initial={false}
        animate={{
          width: status === 'idle' ? '100%' : status === 'loading' ? '100%' : btnHeight,
          height: status === 'idle' ? '100%' : status === 'loading' ? 6 : btnHeight,
          borderRadius: status === 'idle' ? 8 : 100,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut"
        }}
        style={{
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%'
        }}
        className={clsx(
          "absolute flex items-center justify-center overflow-hidden",
          status === 'idle' 
            ? buttonClassName 
            : status === 'loading'
              ? "bg-stone-200 dark:bg-stone-700"
              : "bg-stone-900 dark:bg-stone-100"
        )}
      >
        <AnimatePresence mode="wait">
          {status === 'idle' && (
            <motion.div
              key="idle-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center gap-2 whitespace-nowrap w-full h-full"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </motion.div>
          )}
        </AnimatePresence>

        {status === 'loading' && (
          <motion.div
            className="absolute left-0 top-0 bottom-0 bg-stone-900 dark:bg-stone-100"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "linear", delay: 0.4 }}
          />
        )}

        <AnimatePresence>
          {status === 'success' && (
            <motion.svg
              key="success-check"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-white dark:text-stone-900 absolute"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1, transition: { duration: 0.4, delay: 0.3, ease: "easeOut" } }}
              exit={{ opacity: 0, scale: 0, transition: { duration: 0.15, delay: 0 } }}
            >
              <motion.path
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
