// import PropTypes from "prop-types";
// // import { nanoid } from 'nanoid';
// import React from "react";
// import style from "./Phonebook.module.css";
// import { PhonebookForm } from "../PhonebookForm/PhonebookForm";
// import { ContactsList } from "../ContactsList/ContactsList";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "components/redux/operations";
// import { selectIsLoading ,selectError } from "components/redux/contactsList/selectors";
// import { selectAuth, selectIsLoggeIn } from "components/redux/auth/selectors";
// // import { fetchingError, fetchingInProgress, fetchingSuccess } from "components/redux/phonebookForm/phonebookSlice";

// export const Phonebook = () => {
//     const dispatch = useDispatch();
//     const isLoading = useSelector(selectIsLoading);
//     const error = useSelector(selectError);
//     const isloggedIn = useSelector(selectIsLoggeIn);
//     const auth = useSelector(selectAuth);

//     // useEffect(()=> {
//     //     // dispatch(fetchContacts())
//     //     if(isloggedIn === true) {
//     //         dispatch(fetchContacts())
//     //         console.log('useEffect ', auth)
//     //     }
//     // }, [dispatch, isloggedIn]);
    
//     return <section className={style.section}>
//         {/* <h1 className={style.title}>Phonebook</h1> */}
//         {/* <PhonebookForm/>    */}
//         {isLoading && !error && <b>Request in progress...</b>}
//         {/* <ContactsList/> */}


//     </section>
// }

// Phonebook.propTypes = {
//     contacts: PropTypes.array,
//     filter: PropTypes.string,
//     name: PropTypes.string,
//     number: PropTypes.string
// }