import React from "react";

export function AlertWithContent() {
  return (
    <>
      <div
        className="flex flex-row items-center justify-center bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 rounded-md mt-3"
        role="alert"
      >
        <p className="font-bold">Error: </p>
        <p className="ml-2">Either you didn't enter location or you entered invalid location. Please check again.</p>
      </div>
    </>
  );
}
