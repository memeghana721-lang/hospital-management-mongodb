import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    return (
        <div className="app-layout">

            <Sidebar />

            <div className="main-content">

                <Navbar />

                <div className="page-container">
                    {children}
                </div>

            </div>

        </div>
    );
};

export default Layout;