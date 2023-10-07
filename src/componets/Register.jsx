import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleResgister = (event) => {
        event.preventDefault()
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        createUser(email, password)
            .then(resut => {
                console.log(resut.user)
                Swal.fire(
                    'Nice !',
                    'Accound Create sucessfully',
                    'success'
                  )
                form.reset('')
                
            })
            .catch(error => {
                console.error(error)
            })

    }
    return (
        <div className="w-8/12 mx-auto bg-base-200 mt-6">
            <form onSubmit={handleResgister} className="card-body">
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

                    <input className="btn btn-error" type="submit" value="Register" />
                </div>
                <p className="text-center mt-3">Allready have accound <Link to='/login' className="bg-orange-500 px-3 text-center py-2 rounded">Login</Link></p>
            </form>
        </div>
    );
};

export default Register;