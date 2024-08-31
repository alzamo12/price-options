import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill  } from "react-icons/ri";
import {  ImCross  } from "react-icons/im";


const NavBar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: "/home", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/contact", name: "Contact" },
        { id: 4, path: "/services", name: "Services" },
        { id: 5, path: "/profile", name: "Profile" }
    ];


    return (
        <nav>
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <ImCross></ImCross> : <RiMenu2Fill className=" "></RiMenu2Fill> 
                }
               
            </div>
            <ul className="md:flex"> {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;