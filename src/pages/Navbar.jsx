import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";


const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext)
    const handleSetActive = (to) => {
        console.log(to);
    };
    const handleLogout = () => {
        logoutUser()
        Swal.fire(
            'wow !',
            'user LogOut',
            'success'
        )
            
    }
    const navInfo = <>
        <li>
            <NavLink
                activeClass="active"
                to="/"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
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
                        activeClass="active"
                        to="/resgister"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        onSetActive={handleSetActive}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Register
                    </NavLink>
                </li> :
                <li>
                    <NavLink
                        activeClass="active"
                        to="/login"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        onSetActive={handleSetActive}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Login
                    </NavLink>
                </li>
        }
        {user &&
            <li>
                <NavLink
                    activeClass="active"
                    to="/news"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onSetActive={handleSetActive}
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Book
                </NavLink>
            </li>
        }
        <li>
            <NavLink
                activeClass="active"
                to="/gallery"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Gallery
            </NavLink>
        </li>
        <li>
            <NavLink
                activeClass="active"
                to="/contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
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
                <h2 className="normal-case text-3xl font-semibold text-red-500">Event <span className="text-orange-400">Edu</span></h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navInfo}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <span className="hidden lg:block">{user?.email}</span>
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src={user?.photoURL} />
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