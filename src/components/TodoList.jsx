import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create, done } from '../store/modules/todo';

export default function TodoList() {
  const todoList = useSelector((state) => state.todo.list).filter(
    (el) => el.done === false,
  );

  const nextID = useSelector((state) => state.todo.nextID);
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
            let krRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g;
            if (
              strRegex.test(inputRef.current.value) ||
              numRegex.test(inputRef.current.value) ||
              krRegex.test(inputRef.current.value)
            ) {
              dispatch(
                create({ id: nextID, text: inputRef.current.value }),
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
              <button onClick={() => dispatch(done(el.id))}>완료</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
