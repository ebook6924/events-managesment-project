import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const { SignInUser, googleLogin } = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        SignInUser(email, password)
            .then(resut => {
                console.log(resut.user)
                Swal.fire(
                    'Greate!',
                    'User login sucessfully',
                    'success'
                )
                form.reset('')
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error)
            })

    }
    const handleGoogle = ()=> {
        googleLogin()
            .then(resut => {
                console.log(resut.user)
                Swal.fire(
                    'Greate!',
                    'Google login sucessfully',
                    'success'
                )
            })
    }
    return (
        <div className="w-8/12 mx-auto bg-base-200 mt-6">
            <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                </div>
                <div className="form-control mt-6">

                    <input className="btn btn-primary" type="submit" value="Login" />
                </div>
                <p className="text-center mt-3">Allready have accound <Link to='/resgister' className="bg-orange-500 px-3 text-center py-2 rounded">Resgister</Link></p>
            </form>
            <div className="text-center">
                <button onClick={handleGoogle} className="btn bg-red-300 w-56 mb-3"><FaGoogle /> Google</button>
            </div>
        </div>
    );
};

export default Login;