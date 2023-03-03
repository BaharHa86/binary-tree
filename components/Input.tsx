import React, { useState } from 'react';

interface InputProps {
  onChange: (values: string[]) => void;
}

function Input({ onChange }: InputProps) {
  return (
    <div className="flex w-full ">
      <input
        type="text"
        placeholder="Please enter something"
        className="block w-3/5 border-2 border-violet-500  bg-violet-100 rounded-lg mt-10 mx-auto p-1.5 font-sans text-base"
        onChange={(e) => {
          onChange(e.target.value.split(' '));
        }}
      ></input>
    </div>
  );
}
export default Input;
