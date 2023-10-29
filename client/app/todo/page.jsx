"use client";

import TodoModel from "@/app/components/Model";
import Link from "next/link";
import React, { useState } from "react";

import {
  BiEdit,
  BiSolidToggleLeft,
  BiSolidToggleRight,
  BiSolidTrash,
} from "react-icons/bi";
const page = () => {
  const [model, setmodel] = useState({ show: false, type: "add", data: {} });
  return (
    <div className="w-screen h-screen px-2 py-5 md:p-10 bg-indigo-200">
      <TodoModel setmodel={setmodel} model={model} />
      <Link href={"/"}>
        <button className="bg-indigo-400 text-white font-semibold px-2 rounded-md mb-2">
          Home
        </button>
      </Link>
      <p className="text-xl font-semibold text-slate-600 mb-2">
        All Todo items{" "}
        <span
          onClick={() => setmodel({ show: true, type: "add", data: {} })}
          className="bg-blue-500 text-white text-base p-1 ml-3 rounded-md cursor-pointer "
        >
          Add new
        </span>
      </p>
      <hr />

      {/* items header start */}
      <div className="flex  py-3 px-2 font-semibold gap-2 md:gap-0">
        <p className="w-2/12">#id</p>
        <p className=" w-5/12 md:w-7/12">Test</p>
        <p className="md:w-1/12">Status</p>
        <p className="md:w-2/12 ">Actions</p>
      </div>
      {/* items header end */}
      <hr className="mb-3" />
      {/* single items start */}
      <div className="md:flex space-y-2 md:space-y-0  py-3 px-2 bg-white rounded-md    items-center text-sm md:text-lg">
        <p className="w-2/12">5545sd55sf</p>
        <p className="w-8/12  ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
          iusto.
        </p>
        <p className="w-1/12 ">
          {/* <BiSolidToggleLeft className="w-7 h-7 text-red-400 " /> */}
          <BiSolidToggleRight className="w-7 h-7 text-green-400 cursor-pointer " />
        </p>
        <p className="w-2/12 flex gap-2 ">
          <BiSolidTrash className="bg-red-500 text-white h-7 w-7 p-1 rounded-md cursor-pointer" />
          <BiEdit
            onClick={() => setmodel({ show: true, type: "edit", data: {} })}
            className="bg-blue-500 text-white h-7 w-7 p-1 rounded-md cursor-pointer"
          />
        </p>
      </div>

      {/* single items end */}
    </div>
  );
};

export default page;
