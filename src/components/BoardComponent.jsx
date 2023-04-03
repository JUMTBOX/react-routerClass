import React from 'react';
import Header from './Header';
import { Link, Route, Routes } from 'react-router-dom';

export default function BoardComponent() {
  return (
    <>
      <Header />
      <h1>게시판 페이지 입니다.</h1>
      <Link to="1">
        <h2>게시글 1번 보여주기</h2>
      </Link>
      <Link to="2">
        <h2>게시글 2번 보여주기</h2>
      </Link>
    </>
  );
}
