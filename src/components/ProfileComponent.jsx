import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';

export default function ProfileComponent() {
  const weight = useSelector((state) => state.weightReducer);
  return (
    <>
      <Header />
      <h1>프로필 페이지입니다. 그런데 당신의 몸무게는 {weight}kg 입니다.</h1>
    </>
  );
}
