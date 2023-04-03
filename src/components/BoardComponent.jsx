import React from 'react';
import Header from './Header';
import { Link, Route, Routes } from 'react-router-dom';

export default function BoardComponent() {
  return (
    <>
      <Header />
      <h1>게시판 페이지 입니다.</h1>
    </>
  );
}
