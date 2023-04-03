import logo from './logo.svg';
import './App.css';
import BoardComponent from './components/BoardComponent';
import ProfileComponent from './components/ProfileComponent';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
import BoardDetail from './components/BoardDetail';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/profile" element={<ProfileComponent />} />
        <Route path="/board" element={<BoardComponent />} />
        <Route path="/board/:boardID" element={<BoardDetail />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
