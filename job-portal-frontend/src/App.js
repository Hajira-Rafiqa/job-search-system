import './App.css';
import '@mantine/core/styles.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FindJobs from './Pages/FindJobs';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import SignUpPage from './Pages/SignUpPage';
import FindTalentPage from './Pages/FindTalentPage';
import TalentProfilePage from './Pages/TalentProfilePage';
import PostJobPage from './Pages/PostJobPage';
import JobDescPage from './Pages/JobDescPage';
import ApplyJobPage from './Pages/ApplyJobPage';
import CompanyPage from './Pages/CompanyPage';
import PostedJobPage from './Pages/PostedJobPage';
import { ToastContainer, toast } from 'react-toastify';
import JobHistoryPage from './Pages/JobHistoryPage';
import ProfilePage from './Pages/ProfilePage';
import Store from './Store';
import { Provider } from "react-redux";
import AppRoutes from './Pages/AppRoutes';

function App() {
  return (

    <Provider store={Store}>
      <ToastContainer />
      
      <AppRoutes />
      
      </Provider>

  );
}

export default App;
