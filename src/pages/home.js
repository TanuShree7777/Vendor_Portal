
import Navbar from "../components/common/Navbar";
import VendorStatics from "../components/VendorStatics";
import Sidebar from "../components/common/sidebar/index";
import CommonTable from "../components/common/CommonTable";
import Container from 'react-bootstrap/Container';

const Home = () => {
    return (
        <>
            <Sidebar />
            <div className="parent-container">
                <Navbar />
                <VendorStatics />
                <CommonTable />
            </div>

        </>
    );
}

export default Home;