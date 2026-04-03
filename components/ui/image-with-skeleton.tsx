"use client";
import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface ImageWithSkeletonProps extends Omit<ImageProps, "onLoad"> {
  containerClassName?: string;
}

const ImageWithSkeleton = ({
  className,
  containerClassName,
  ...props
}: ImageWithSkeletonProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative w-full h-full overflow-hidden", containerClassName)}>
      {/* Shimmer skeleton */}
      {!loaded && (
        <div className="absolute inset-0 rounded-[inherit] bg-muted overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      )}
      <Image
        {...props}
        className={cn(
          "transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default ImageWithSkeleton;
