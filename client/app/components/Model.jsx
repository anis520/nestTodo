"use client";
import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";
const TodoModel = ({ model, setmodel }) => {
  return (
    model.show && (
      <div className="fixed top-0 left-0 bg-opacity-50 w-full h-full bg-slate-600 flex items-center justify-center">
        <div
          className="absolute top-0 left-0  w-full h-full "
          onClick={() => setmodel({ show: false, type: "add", data: {} })}
        ></div>
        <div className="bg-white w-11/12 md:w-4/12 p-6 rounded-2xl space-y-3 relative">
          <FaDeleteLeft
            onClick={() => setmodel({ show: false, type: "add", data: {} })}
            className="absolute top-1 right-2 w-7 h-7  text-red-600  cursor-pointer hover:scale-110 duration-300"
          />
          <p className="font-semibold text-xl ">
            {model.type == "add" ? "Add Todo" : "Update Todo"}
          </p>
          <input className="w-full bg-slate-200 p-1 rounded-md" type="text" />
          <button className="bg-blue-500 text-white p-1 rounded-md w-full">
            Save
          </button>
        </div>
      </div>
    )
  );
};

export default TodoModel;
