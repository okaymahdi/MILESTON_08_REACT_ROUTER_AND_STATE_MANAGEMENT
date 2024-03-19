import { useState } from "react";
import Link from "../Link/Link";
import { IoIosMenu, IoIosClose  } from "react-icons/io";

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: "/", name: "Home", description: "Landing page of the application." },
        { id: 2, path: "/about", name: "About", description: "Information about the application or company." },
        { id: 3, path: "/products", name: "Products", description: "Page displaying a list of products available in the application." },
        { id: 4, path: "/products/:id", name: "ProductDetail", description: "Detailed view of a specific product identified by its ID." },
        { id: 5, path: "/contact", name: "Contact", description: "Page with contact information or a form to get in touch." }
    ];


    return (
        <nav className="bg-yellow-200 p-6">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoIosClose></IoIosClose> : <IoIosMenu></IoIosMenu>
                }

            </div>
            <ul className={`md:flex absolute md:static duration-1000 bg-yellow-200 px-6 ${open ? 'top-16': '-top-60'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;