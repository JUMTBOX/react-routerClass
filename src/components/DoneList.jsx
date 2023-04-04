import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { done } from '../store/modules/todo';

export default function DoneList() {
  const todoList = useSelector((state) => state.todo.list);
  const dispatch = useDispatch();
  return (
    <section>
      <h1>완료된 목록</h1>
      <ul>
        {todoList.map((el) => {
          return (
            <li key={el.id}>
              {el.text}
              <button
                onClick={() => {
                  dispatch(done(''));
                }}
              >
                완료
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
