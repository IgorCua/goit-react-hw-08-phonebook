import { selectUserEmail } from "components/redux/auth/selectors"
import { useDispatch, useSelector } from "react-redux"
import { logOut } from "components/redux/auth/operations";

export const UserMenu = () => {
    const email = useSelector(selectUserEmail);
    const dispatch = useDispatch()
    // console.log('email', email)
    return <div>
        <p>{email}</p>
        <button onClick={()=> dispatch(logOut())}>Logout</button>
    </div>
}