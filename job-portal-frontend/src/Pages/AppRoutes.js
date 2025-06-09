import HomePage from './HomePage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SignUpPage from './SignUpPage';
import FindTalentPage from './FindTalentPage';
import TalentProfilePage from './TalentProfilePage';
import PostJobPage from './PostJobPage';
import JobDescPage from './JobDescPage';
import ApplyJobPage from './ApplyJobPage';
import CompanyPage from './CompanyPage';
import PostedJobPage from './PostedJobPage';
import JobHistoryPage from './JobHistoryPage';
import ProfilePage from './ProfilePage';
import FindJobs from './FindJobs';
import { useSelector } from 'react-redux';

const AppRoutes = () => {
    const user = useSelector((state) => state.user);
    return (
    <BrowserRouter>
        <div className='relative'>
        <Header/>
        <Routes>
          <Route path='/find-jobs' element={<FindJobs/>} />
          <Route path='/find-talent' element={<FindTalentPage/>} />
          <Route path='/jobs' element={<JobDescPage/>} />
          <Route path='/apply-job' element={<ApplyJobPage/>} />
          <Route path='/company' element={<CompanyPage/>} />
          <Route path='/post-job' element={<PostJobPage/>} />
          <Route path='/talent-profile' element={<TalentProfilePage/>} />
          <Route path='/posted-job' element={<PostedJobPage/>} />
          <Route path='/job-history' element={<JobHistoryPage/>} />
          <Route path='*' element={<HomePage/>} />
          <Route path='/signup' element={user?<Navigate to="/" />:<SignUpPage/>} />
          <Route path='/login' element={user?<Navigate to="/" />:<SignUpPage/>} />
          <Route path='/profile' element={<ProfilePage/>} />
        </Routes>
        <Footer/>
        </div>
      </BrowserRouter> 
    )
}

export default AppRoutes;