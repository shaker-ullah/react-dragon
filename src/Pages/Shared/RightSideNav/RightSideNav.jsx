import { FaFacebook, FaGithub, FaGoogle, FaInstagram,  FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'


const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-4 mb-10">
                <h2 className="text-3xl font-bold">Login With</h2>
                <button className="btn btn-outline w-full ">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className="btn btn-outline w-full ">
                    <FaGithub></FaGithub>
                    Github
                </button>
            </div>

            <div className="p-4 mb-10">
                <h2 className="text-3xl font-bold">Find Us On</h2>
                <a className="flex p-4 items-center gap-3 border rounded-t-lg" href="">
                    <FaFacebook></FaFacebook>
                    Facebook
                </a>
                <a className="flex p-4 items-center gap-3 border-x" href="">
                    <FaTwitter></FaTwitter>
                    Twitter
                </a>
                <a className="flex p-4 items-center gap-3 border rounded-b-lg" href="">
                    <FaInstagram></FaInstagram>
                    Instagram
                </a>
            </div>
            {/* q zone */}
            <div className="p-4 space-y-4 mb-10">
                <h2 className="text-3xl font-bold">Q Zone</h2>
              <img src={qZone1} alt="" />
              <img src={qZone2} alt="" />
              <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;