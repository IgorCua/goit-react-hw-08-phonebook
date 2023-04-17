import { NavLink, Link } from "react-router-dom";
// import { logIn } from "components/redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, selectIsLoggeIn } from "components/redux/auth/selectors";
import { logOut } from "components/redux/auth/operations";
import { Nav, StyledLink } from "./Navigation.styled";
// import style from "./Navigation.module.css";

export const Navigation = () => {
    const isloggedIn = useSelector(selectIsLoggeIn);
    const auth = useSelector(selectAuth);
    const dispatch = useDispatch();
    console.log('navigation isLoggedIn', isloggedIn)
    console.log('navigation state', auth)
    return (<Nav>
        <StyledLink to='/goit-react-hw-08-phonebook/'>Home</StyledLink>
        <StyledLink to='/goit-react-hw-08-phonebook/register'>Register</StyledLink>
        <StyledLink to='/goit-react-hw-08-phonebook/login'>Login</StyledLink>
        {/* <ul>
            {isloggedIn ? (
                    <>
                    <li>
                        <p>mango@mail.com</p>
                    </li>
                    <li>
                        <button onClick={()=> dispatch(logOut())}>Logout</button>
                    </li>
                    </>
                    
                ) : (
                    <>
                    <li>
                        <NavLink to='/goit-react-hw-08-phonebook/register'>Register</NavLink>
                    </li>
                    <li>
                        <NavLink to='/goit-react-hw-08-phonebook/login'>Login</NavLink>
                    </li>
                    </>
                )
            }
        </ul> */}

        {/* <NavLink to='/goit-react-hw-08-phonebook/register'>Register</NavLink>
        <NavLink to='/goit-react-hw-08-phonebook/login'>Login</NavLink>
        <NavLink to='/goit-react-hw-08-phonebook/contacts'>Contacts</NavLink> */}
    </Nav>
    )
}