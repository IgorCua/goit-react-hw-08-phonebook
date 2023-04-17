import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Phonebook } from "./Phonebook/Phonebook";
import { HomePage } from "pages/HomePage";
import { RegisterPage } from "pages/RegisterPage";
import { LoginPage } from "pages/LoginPage";
import { ContactsPage } from "pages/ContactsPage";
// import {NotFound} from "pages/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggeIn, selectAuth } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/operations";
// name: qwertyu 
// mail: qwertyu@qwertyu.com
// pass: qwertyu

export const App = () => {
  const isloggedIn = useSelector(selectIsLoggeIn);
  // const auth = useSelector(selectAuth)
  const dispatch = useDispatch();
  // console.log('App', localStorage)
  // localStorage.clear()

  useEffect(()=> {
    dispatch(refreshUser())
    // console.log('useEffect ', auth)
  }, [dispatch]);

  return <div
    style={{
      // height: '100vh',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 24,
      color: '#010101'
    }}
  > 
    {isloggedIn ? (<Routes>
        <Route path="/goit-react-hw-08-phonebook/" element={<HomePage/>}>
          {/* <Route index element={}/> */}
          <Route path="/goit-react-hw-08-phonebook/contacts" element={<ContactsPage></ContactsPage>}></Route>
          <Route path="*" element={<Navigate to='/goit-react-hw-08-phonebook/contacts'/>}></Route>
        </Route>
      </Routes>
      ) : (
      <Routes>
        <Route path="/goit-react-hw-08-phonebook/" element={<HomePage/>}>
          <Route path="/goit-react-hw-08-phonebook/login" element={<LoginPage/>}></Route>
          <Route path="/goit-react-hw-08-phonebook/register" element={<RegisterPage/>}></Route>
          <Route path="*" element={<Navigate to='/goit-react-hw-08-phonebook/login'/>}></Route>
        </Route>
        {/* <Route path="/goit-react-hw-08-phonebook/login" element={<LoginPage/>}></Route>
        <Route path="/goit-react-hw-08-phonebook/register" element={<RegisterPage/>}></Route>
        <Route path="*" element={<Navigate to='/goit-react-hw-08-phonebook/login'/>}></Route> */}
      </Routes>
      )
    }
    {/* <Routes>
      <Route path="/goit-react-hw-08-phonebook" element={<HomePage/>}></Route>
      <Route path="/goit-react-hw-08-phonebook/login" element={<LoginPage/>}></Route>
      <Route path="/goit-react-hw-08-phonebook/register" element={<RegisterPage/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes> */}
    {/* <Phonebook/> */}
  </div>
}