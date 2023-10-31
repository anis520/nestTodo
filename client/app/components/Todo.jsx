import React, { useEffect, useState } from "react";
import Model from "./Model";
import { FcEditImage, FcFullTrash } from "react-icons/fc";
import { deleteTodos, getAllTodos, updateTodos } from "../service/TodoServices";

const Todo = () => {
  const [todos, setTodos] = useState(null);

  // get all data
  const getData = async () => {
    const data = await getAllTodos();
    console.log(data);
    setTodos(data);
  };

  // update data handaler
  const handleUpdateTodo = async (data) => {
    await updateTodos(data);
    getData();
  };

  // delete data handler
  const handleDeleteTodo = async (data) => {
    await deleteTodos(data);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <Model getData={getData} />
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className="w-2/12">Check</th>
            <th>Text</th>
            <th className="w-2/12">Status</th>
            <th className="w-2/12"> Action</th>
          </tr>
        </thead>
        <tbody>
          {todos?.map((item) => {
            return (
              <tr key={item._id}>
                <th className="w-2/12">
                  <input type="checkbox" className="checkbox " />
                </th>
                <td className="">
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{item.text}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  {" "}
                  <input
                    onClick={() =>
                      handleUpdateTodo({
                        ...item,
                        status: !item.status,
                      })
                    }
                    type="checkbox"
                    className="toggle toggle-success"
                    checked={item.status}
                  />
                </td>
                <td className="  flex gap-3 items-center   ">
                  <FcEditImage className="h-7 w-7 cursor-pointer hover:scale-125 duration-300    border border-gray-300 rounded-md " />
                  <FcFullTrash
                    onClick={() => handleDeleteTodo(item)}
                    className="h-7 w-7 cursor-pointer hover:scale-125 duration-300   border border-gray-300 rounded-md"
                  />{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>{" "}
      {!todos && (
        <div className="space-y-3 mb-5">
          <div className="flex p-5 gap-6 rounded-md border-2 border-gray-600 w-full">
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-lg"></span>

            <span className="loading loading-bars loading-lg"></span>
          </div>

          <div className="flex p-5 gap-6 rounded-md border-2 border-gray-600 w-full">
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-lg"></span>

            <span className="loading loading-bars loading-lg"></span>
          </div>
        </div>
      )}{" "}
      <button className="btn btn-md btn-error text-white capitalize">
        Delete sellected
      </button>
    </div>
  );
};

export default Todo;
