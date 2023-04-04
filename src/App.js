import './App.css';
import Header from './components/Header';
import TestRedux from './components/TestRedux';
import { Route, Routes } from 'react-router-dom';
import BoardComponent from './components/BoardComponent';
import ProfileComponent from './components/ProfileComponent';
import NotFound from './components/NotFound';
import BoardDetail from './components/BoardDetail';
import TodoList from './components/TodoList';
import ListContainer from './components/ListContainer';

function App() {
  return (
    <>
      <div className="App">
        <ListContainer />
        {/* <Routes>
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/" element={<Header />} />
          <Route path="/profile" element={<ProfileComponent />} />
          <Route path="/test" element={<TestRedux />} />
          <Route path="/board" element={<BoardComponent />} />
          <Route path="/board/:boardID" element={<BoardDetail />} />
          <Route path="/*" element={<NotFound />} />
        </Routes> */}
      </div>
    </>
  );
}

export default App;
