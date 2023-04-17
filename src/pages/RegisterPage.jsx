// import { Navigation } from "components/navigation/Navigation"
// import { selectAuth } from "components/redux/auth/selectors";
import { register } from "components/redux/auth/operations";
import { useDispatch } from "react-redux";

export const RegisterPage = () => {
    // const auth = useSelector(selectAuth);
    const dispatch = useDispatch();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.currentTarget;
        console.log('register clicked');
        console.log(evt)
        console.log({
            name: form.name.value, 
            email: form.email.value, 
            password: form.password.value
        });

        dispatch(register({
            name: form.name.value, 
            email: form.email.value, 
            password: form.password.value
        }));

        console.log('JSON ', JSON.stringify({
            'name': form.name.value, 
            'email': form.email.value, 
            'password': form.password.value
        }));

        // console.log('auth', auth);
    }

    // console.log('auth', auth);

    return <div>
        <h1>Register page</h1>
        <form action="" onSubmit={handleSubmit} autoComplete="on">
            <input type="text" placeholder="Name" name="name" autoComplete="name" required/>
            <input type="email" placeholder="E-mail" name="email" autoComplete="email" required/>
            <input type="password" placeholder="Password" name="password" autoComplete="password" minLength={7} required/>
            <button type="submit">Register</button>
        </form>
        {/* <Navigation/> */}
    </div>
}