import { ArrowPathIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function Reload() {
  return (
    <div
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer"
      onClick={() => window.location.reload()}
    >
      <ArrowPathIcon className="w-6 h-6" />
    </div>
  );
}
