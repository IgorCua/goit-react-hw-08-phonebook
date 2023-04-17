import PropTypes from "prop-types";
import { ContactsList } from "components/ContactsList/ContactsList";
import { PhonebookForm } from "components/PhonebookForm/PhonebookForm";
// import { Navigation } from "components/navigation/Navigation";
// import { UserMenu } from "components/userMenu/UserMenu";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggeIn } from "components/redux/auth/selectors";
import { fetchContacts } from "components/redux/operations";

export const ContactsPage = () => {
    const isloggedIn = useSelector(selectIsLoggeIn);
    const dispatch = useDispatch();

    useEffect(()=> {
        // dispatch(fetchContacts())
        if(isloggedIn === true) {
            dispatch(fetchContacts())
            // console.log('useEffect ', auth)
        }
    }, [dispatch, isloggedIn]);

    return <div>
        <h2>Contacts</h2>
        {/* <UserMenu/> */}
        <PhonebookForm/>
        <ContactsList/>
        
    </div>
}

ContactsPage.propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string
}