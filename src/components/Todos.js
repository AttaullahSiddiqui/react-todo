import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { TodoItem } from "./Todo";
import { AddTodo } from "./AddTodo";

export const Todos = () => {
  let initTodos;
  if (localStorage.getItem("todos"))
    initTodos = JSON.parse(localStorage.getItem("todos"));
  else initTodos = [];
  const [todos, setTodos] = useState(initTodos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodoFunc = (todo) => {
    todos[0]?todo.sNo=todos[todos.length-1].sNo+1:todo.sNo=1;
    setTodos([...todos, todo]);
  };
  const deleteTodoFunc = (sNo) => {
    setTodos(todos.filter((val) => val.sNo !== sNo));
  };

  return (
    <div className="container">
      <br />
      <AddTodo addFunc={addTodoFunc} />
      <br />
      <h2 className="text-center">Todos List</h2>
      <br />

      <ListGroup as="ol" numbered>
        {todos.length ? (
          todos.map((todo) => {
            return (
              <TodoItem todo={todo} onDelete={deleteTodoFunc} key={todo.sNo} />
            );
          })
        ) : (
          <h5 className="text-center text-muted">"No todos to show"</h5>
        )}
      </ListGroup>
    </div>
  );
};
