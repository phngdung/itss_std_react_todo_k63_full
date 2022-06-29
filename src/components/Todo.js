import React, { useState } from "react";
import { useFirebaseStorage } from "../hooks/";

/* コンポーネント */
import TodoItem from "./TodoItem";
import Input from "./Input";
import Filter from "./Filter";

function Todo() {
  const [items, addTodo, updateTodo, deleteTodo] = useFirebaseStorage();
  const [filter, setFilter] = React.useState("ALL");
  const displayItems = items.filter((item) => {
    if (filter === "ALL") return true;
    if (filter === "TODO") return !item.done;
    if (filter === "DONE") return item.done;
  });

  const handleCheck = (checked) => {
    updateTodo({ ...checked, done: !checked.done });
  };
  const handleAdd = (text) => {
    const item = {
      text,
      done: false,
    };
    addTodo(item);
  };
  const handleClear = (checked) => {
    try {
      items.map((item) => {
        deleteTodo(item);
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleFilterChange = (value) => setFilter(value);

  return (
    <article class="panel is-danger">
      <div className="panel-heading">
        <span class="icon-text">
          <span class="icon">
            <i class="fas fa-calendar-check"></i>
          </span>
          <span> ITSS Todoアプリ</span>
        </span>
      </div>
      <Input onAdd={handleAdd} />
      <Filter items={items} handleCheck={handleCheck} />
      <div className="panel-block">
        <button className="button is-light is-fullwidth" onClick={handleClear}>
          全てのToDoを削除
        </button>
      </div>
    </article>
  );
}

export default Todo;
