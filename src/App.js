import React from 'react';
import Start from './pages/Start';
import Mbti from './pages/Mbti';
import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import { useSelector } from 'react-redux';

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px;
  margin: auto;
  text-align: center;
`;

function App() {
  const page = useSelector((state) => state.mbti.page);
  return (
    <>
      <GlobalStyle />
      <Main>{page === 0 ? <Start /> : <Mbti />}</Main>
    </>
  );
}

export default App;
