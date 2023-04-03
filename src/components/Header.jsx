import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
        <li>
          <Link to="/">홈으로</Link>
        </li>
        <li>
          <Link to="/profile">프로필로 이동</Link>
        </li>
        <li>
          <Link to="/board">게시판으로 이동</Link>
        </li>
      </ul>
    </>
  );
}
