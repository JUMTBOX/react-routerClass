import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create } from '../store/modules/todo';

export default function TodoList() {
  const todoList = useSelector((state) => state.todo.list);
  const dispatch = useDispatch();
  const inputRef = useRef();
  return (
    <section>
      <h1>할 일 목록</h1>
      <div>
        <input type="text" ref={inputRef} />
        <button
          onClick={() => {
            let strRegex = /[a-zA-Z]/g;
            let numRegex = /[0-9]/g;
            if (
              strRegex.test(inputRef.current.value) ||
              numRegex.test(inputRef.current.value)
            ) {
              dispatch(
                create({ id: todoList.length, text: inputRef.current.value }),
                (inputRef.current.value = ''),
              );
            }
          }}
        >
          추가
        </button>
      </div>
      <ul>
        {todoList.map((el) => {
          return (
            <li key={el.id}>
              {el.text} {el.done}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
