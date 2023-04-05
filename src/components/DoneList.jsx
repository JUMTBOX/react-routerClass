import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { done } from '../store/modules/todo';

export default function DoneList() {
  const doneList = useSelector((state) => state.todo.list).filter(
    (el) => el.done === true,
  );
  const dispatch = useDispatch();
  return (
    <section>
      <h1>완료된 목록</h1>
      <ul>
        {doneList.map((el) => {
          return <li key={el.id}>{el.text}</li>;
        })}
      </ul>
    </section>
  );
}
