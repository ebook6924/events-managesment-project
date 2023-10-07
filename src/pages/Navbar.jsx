import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";


const Navbar = () => {
    const { user, logoutUser  } = useContext(AuthContext)

    const handleLogout = () => {
        logoutUser()
            .then(result => {
                console.log(result.user)
                Swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                )

            })
            .catch(error => {
                console.log(error)
            })
    }
    const navInfo = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Home
            </NavLink>
        </li>
        {
            !user ?
                <li>
                    <NavLink
                        to="/resgister"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Register
                    </NavLink>
                </li> :
                <li>
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Login
                    </NavLink>
                </li>
        }
        <li>
            <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Contact
            </NavLink>
        </li>
    </>
    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navInfo}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navInfo}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <span>{user?.email}</span>
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src={user?.displayName} />
                            </div>
                        </div>
                        <button onClick={handleLogout} className="btn btn-success">Logout</button>

                    </> : <Link className="btn btn-warning" to='/login'>Login</Link>
                }
            </div>

        </div>
    );
};

export default Navbar;