import { Navigation } from "components/navigation/Navigation";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggeIn } from "components/redux/auth/selectors";
// import { ContactsList } from "components/ContactsList/ContactsList";
// import { PhonebookForm } from "components/PhonebookForm/PhonebookForm";
import { UserMenu } from "components/userMenu/UserMenu";

export const HomePage = () => {
    const isLoggedIn = useSelector(selectIsLoggeIn);
    const location = useLocation();
    console.log('homepage', isLoggedIn)
    console.log('homepage', location)

    return <div>
        {isLoggedIn ? <UserMenu/> 
                    : (<>
                        <Navigation/>
                        </>   
                    )}
        {location.pathname === '/goit-react-hw-08-phonebook/' && <h1>Please login or register to access contacts.</h1>}
        <Outlet/>
    </div>
}