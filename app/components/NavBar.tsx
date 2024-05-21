import ActiveLink from "./ActiveLink";

const NavBar = () => {
    return ( 
        <nav className="max-w-[1920px] grid grid-cols-12 px-2 mx-auto py-5 border-b border-zinc-400 shadow-xl mb-11">
            <div className="col-span-3">
                <h1 className="ml-5">Logo</h1>
            </div>
            <ActiveLink/>
            <div className="col-span-3 flex gap-2">
                <span>Login</span>
                <span>Register</span>
            </div>
        </nav>
     );
}
 
export default NavBar;