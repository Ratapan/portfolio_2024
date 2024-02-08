import React from 'react';
import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

function Skeleton({ className, children, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("relative animate-pulse rounded-md bg-coffee_bg_two dark:bg-zinc-700", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export { Skeleton };
