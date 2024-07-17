import { Link } from "react-router-dom";
import { LayoutDashboard, Beef, Armchair, Archive, LogOut, User, Package } from "lucide-react";

function NavBar() {
    return (
        <>
            <nav className="text-cente bg-st_blue rounded-xl h-full w-fit p-5 grid grid-rows-7 justify-items-stretch text-lg text-white divide-y-2 font-medium">
                <ul className="flex justify-center items-center space-x-2">
                    <Package size={30} />
                    <h1 className="text-xl">Stocker</h1>
                </ul>
                <ul className="flex justify-center items-center">
                    <div className="flex space-x-2">
                        <User />
                        <h1>John Doe</h1>
                    </div>
                </ul>
                <ul className="row-span-4 flex flex-col justify-center items-center space-y-[50%]">
                    <li>
                        <Link to="/wbA/">
                            <div className="flex space-x-2  items-center">
                                <LayoutDashboard />
                                <h1>Dashboard</h1>
                            </div>
                        </Link>
                    </li>
                    <li className="">
                        <Link to="/wbA/food">
                            <div className="flex space-x-2 items-center">
                                <Beef />
                                <h1>Alimentos</h1>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/wbA/resources">
                            <div className="flex space-x-2 items-center">
                                <Archive />
                                <h1>Insumos</h1>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/wbA/furniture">
                            <div className="flex space-x-2 items-center">
                                <Armchair />
                                <h1>Mobiliaria</h1>
                            </div>
                        </Link>
                    </li>
                </ul>
                <ul className="flex justify-center items-center w-max">
                    <Link to="/">
                        <div className="flex space-x-2">
                            <LogOut />
                            <h1>Cerrar Sesion</h1>
                        </div>
                    </Link>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;