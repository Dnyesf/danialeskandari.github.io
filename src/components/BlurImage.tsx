import React, { useState } from 'react';
import clsx from 'clsx';

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  imgClassName?: string;
}

export default function BlurImage({ src, alt, className, imgClassName, ...props }: BlurImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={clsx("overflow-hidden relative bg-stone-100 dark:bg-stone-800", className)}>
      <img
        src={src}
        alt={alt}
        className={clsx(
          "transition-all duration-500 ease-in-out",
          isLoaded ? "scale-100 blur-0" : "scale-110 blur-xl",
          imgClassName || "w-full h-full object-cover"
        )}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
}
