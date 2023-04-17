import { logIn } from "components/redux/auth/operations";
// import { selectAuth } from "components/redux/auth/selectors";
import { useDispatch } from "react-redux";

export const LoginForm = () => {
    // const auth = useSelector(selectAuth);
    const dispatch = useDispatch();
    
    const formHandler = (evt) => {
        evt.preventDefault();
        const form = evt.currentTarget;
        
        // console.log(auth);
        
        dispatch(logIn({email: form.email.value, password: form.password.value}))
    }

    return <form action="" onSubmit={formHandler}>
        <input type="text" name="email" placeholder="E-mail" required/>
        <input type="password" name="password" placeholder="Password" required/>
        <button type="submit">LogIn</button>
    </form>
}