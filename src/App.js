
import './App.css';
import Footer from './Footer';
import Header from './Header';
import HeaderTab from './HeaderTab';
import MainContent from './MainContent';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import RepositoryContainer from './repository/RepositoryContainer';

function App() {
  return (
    <div className="bg-gray-900 sm:bg-[#090909] ">
      <Router >
      <Header />
        <div className='sticky top-0 hidden w-full sm:block z-50'>
          <HeaderTab />
        </div>
        <Routes>
          <Route path='/*' element={<MainContent /> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
