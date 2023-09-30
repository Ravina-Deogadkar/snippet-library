import './App.css';
import LandingPage from './component/LandingPage/Pages/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './component/SignUp/Pages/SignUp';
import { Dashboard } from './component/Dashboard/Pages/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
