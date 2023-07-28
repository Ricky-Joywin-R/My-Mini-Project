import Navbar from './NavigationBar';
const Layout=({children})=>{
    return(
        <div>
        <Navbar/>
        {children}
        </div>
    );
}
export default Layout;