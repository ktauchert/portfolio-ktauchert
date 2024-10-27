"use client";
import React from "react";

type Props = {
  progress: number;
};

const LoadingBar = (props: Props) => {
  return (
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        suppressHydrationWarning
        className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
        style={{ width: `${props.progress}%` }}
      >
        {`${props.progress}%`}
      </div>
    </div>
  );
};

export default LoadingBar;
