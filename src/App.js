
import './App.css';
import Footer from './Footer';
import Header from './Header';
import HeaderTab from './HeaderTab';
import MainContent from './MainContent';

function App() {
  return (
    <div className="bg-gray-900 sm:bg-[#090909] ">
      <Header />
      <div className='hidden w-full sm:block'>
        <HeaderTab />
      </div>
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
