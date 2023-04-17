import './App.css';
import LandingPage from './component/LandingPage/Pages/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './component/SignUp/Pages/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
