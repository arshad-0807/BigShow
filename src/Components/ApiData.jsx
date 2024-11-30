import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiData = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setTodos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      <div className="text-light">
        <table className="w-100" style={{ border: "1px solid red" }}>
          <tr className="text-center" style={{ border: "1px solid red" }}>
            <th>User Id</th>
            <th>NAME</th>
            <th>USERNAME</th>
            <th>EMAIl</th>
          </tr>

          {todos.map((todo) => (
            <tr key={todo.id} style={{ border: "1px solid #fff" }}>
              <td className="text-center" style={{ border: "1px solid #fff" }}>
                {todo.id}
              </td>
              <td className="text-center" style={{ border: "1px solid #fff" }}>
                {todo.name}
              </td>
              <td className="text-center" style={{ border: "1px solid #fff" }}>
                {todo.username}
              </td>
              <td className="text-center" style={{ border: "1px solid #fff" }}>
                {todo.email}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default ApiData;
