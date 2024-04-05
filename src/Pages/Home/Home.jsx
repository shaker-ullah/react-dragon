import Header from "../Shared/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BrackingNews from "./BrackingNews";


const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Header></Header>
            <BrackingNews/>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="col-span-1">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    <h2>News Comming Soon</h2>
                </div>
                <div className="col-span-1">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;