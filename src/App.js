import React from 'react'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import { app } from './auth/auth'
import { getAuth } from 'firebase/auth'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Home from './views/home/Home'
import Header from './views/home/Header'
import Footer from './components/footer/Footer'
import Career from './views/career/Career'
import Login from './views/auth/Login'
import Register from './views/auth/Register'
import CourseDiscp from './views/career/CourseDiscp'
import Apply from './views/career/Apply'
import { ToastContainer } from 'react-toastify'
import Programs from './views/programs/Programs'
import NotFound from './views/NotFound'
import PrivacyPolicy from './views/pages/PrivacyPolicy'
import TermAndConditions from './views/pages/TermAndConditions'
import ContactUs from './views/ContactUs'
import Profile from './views/auth/Profile'
import Dashboard from './views/dashboard/Dashboard'
import DigitalLearning from './views/digitalLearning/DigitalLearning'
import CourseDetails from './components/digitalLearning/Details'
import NewsDiscp from './views/news/NewsDescp'
import Pay from './views/career/forms/Pay'
import RefundPolicies from './views/pages/RefundPolicies'
import Disclaimers from './views/pages/Disclaimers'
import ResetPassword from './views/auth/ResetPassword'
import Process from './views/Process'
import OurPrograms from './views/OurPrograms'
import About from './views/About'
import FooterExt from './views/FooterExt'
import Faq from './views/pages/Faq'
import Legal from './views/pages/Legal'
import Press from './views/pages/Press'
import Workact from './views/pages/Workact'
// import Ourcenter from './views/pages/Ourcenter'
import Ourcenter from './views/pages/Ourcenter'
import Mission from './views/pages/Mission'
import Vision from './views/pages/Vision'
import OurProgram from './views/pages/OurProgram'
function App() {
  const auth = getAuth(app)
  const [user, setUser] = React.useState(null)
  const [authCheck, setAuthCheck] = React.useState(true)

  async function onAuthStateChanged(user) {
    // console.log('user--', user)
    // setUser(user)
    // const token = await  auth?.currentUser?.getIdToken();
    // axios.defaults.headers.common["Authorization"] = token;
    // if (authCheck) setAuthCheck(false);
  }
  React.useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  }, [])

  // if (auth?.currentUser) {
  //   return <></>;
  // }

  const getUserInfo=()=>localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null;
  return (
    <div>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/creers' component={Career} />
          <Route exact path='/digitalLearning' component={DigitalLearning} />
          <Route
            exact
            path='/digitalLearning/descp/:cid'
            component={CourseDetails}
          />
          <Route path='/login' component={Login} />
          <Route path='/reg' component={Register} />
          <Route path='/reset' component={ResetPassword} />
          <Route path='/creers/descp/:id' component={CourseDiscp} />
          <Route path='/news/descp/:nid' component={NewsDiscp} />
          <Route path='/legal' component={Legal} />
          <Route path='/press' component={Press} />
          <Route path='/mission' component={Mission} />
          <Route path='/work' component={Workact} />
          <Route path='/center' component={Ourcenter} />
          <Route path='/program' component={Programs} />
          <Route path='/vision' component={Vision} />
          <Route path='/oprogram' component={OurProgram} />
          <Route
            path='/apply/:jobId'
            render={() =>
              getUserInfo() ? (
                <Apply user={ getUserInfo()} />
              ) : (
                <Redirect to='/login' />
              )
            }
          />
          <Route
            path='/profile'
            render={() =>
              getUserInfo() ? <Profile user={getUserInfo()} /> : <Redirect to='/login' />
            }
          />
          <Route
            path='/dashboard'
            render={() =>
              auth?.currentUser ? <Dashboard /> : <Redirect to='/login' />
            }
          />

          <Route path='/contact' component={ContactUs} />
          <Route path='/privacy' component={PrivacyPolicy} />
          <Route path='/terms' component={TermAndConditions} />
          <Route path='/refund' component={RefundPolicies} />
          <Route path='/disclaimers' component={Disclaimers} />
          <Route path='/process' component={Process} />
          <Route path='/ourPrograms' component={OurPrograms} />
          <Route path='/about' component={About} />
          <Route path='/faq' component={Faq} />
          <Route path='*' component={NotFound} />
        </Switch>
        {/* <FooterExt /> */}
        <Footer />
      </Router>
    </div>
  )
}

export default App
