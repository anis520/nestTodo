const baseUrl = "http://localhost:3000";

// get all todos
export const getAllTodos = async () => {
  const res = await fetch(`${baseUrl}/todo/`);
  const data = await res.json();
  return data;
};
//create todo
export const createTodos = async (data) => {
  await fetch(`${baseUrl}/todo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

//delete todo
export const deleteTodos = async (data) => {
  await fetch(`${baseUrl}/todo/${data._id}`, {
    method: "DELETE",
  });
};
//update todo
export const updateTodos = async (data) => {
  await fetch(`${baseUrl}/todo/${data._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
