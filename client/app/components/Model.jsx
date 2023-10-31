import { AiFillCloseCircle } from "react-icons/ai";
import { useRef, useState } from "react";
import userFromField from "../hooks/useFromField";
import { createTodos } from "../service/TodoServices";

export default function Model({ getData }) {
  const { input, handleInputChange, resetForm, setinput } = userFromField({
    text: "",
    status: false,
  });

  console.log(input);

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setinput({ ...input, status: true });
    } else {
      setinput({ ...input, status: false });
    }
  };

  const model = useRef(null);
  const handleClose = () => {
    model.current.showModal();
  };

  const handleCreate = async () => {
    await createTodos(input);
    getData();
    resetForm();
  };

  return (
    <div className="my-2">
      <button onClick={handleClose} className="btn btn-success text-white">
        Add New
      </button>

      <dialog ref={model} className="modal">
        <div className="modal-box  ">
          <label className="label">Text</label>
          <input
            type="text"
            name="text"
            value={input.text}
            onChange={handleInputChange}
            placeholder="Type here"
            className="input input-bordered w-full mb-2"
          />
          <label className="">Status</label>
          <input
            type="checkbox"
            name="status"
            onChange={handleCheckbox}
            className="toggle toggle-success block my-2"
            checked={input.status}
          />{" "}
          <button
            onClick={handleCreate}
            className="btn text-white btn-primary w-full mt-3"
          >
            Save
          </button>
        </div>
        <form method="dialog" className="modal-backdrop ">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
