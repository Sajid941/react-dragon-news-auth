import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";
import qZone1 from "../../assets/qZone1.png"
import qZone2 from "../../assets/qZone2.png"
import qZone3 from "../../assets/qZone3.png"
const RightSideBar = () => {
    return (
        <div className="space-y-5">
            <div className="p-4 space-y-3">
                <h1 className="text-xl font-semibold text-[#403F3F]">Login with</h1>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    GitHub
                </button>
            </div>
            <div className="p-4 ">
                <h1 className="text-xl font-semibold text-[#403F3F] mb-3">Find us on</h1>
               <a href="#" className="flex items-center gap-2 border-2 rounded-t-lg p-4">
                <FaFacebook></FaFacebook>
                Facebook
               </a>
               <a href="#" className="flex items-center gap-2 border-x-2 p-4">
                <FaTwitter></FaTwitter>
                Twitter
               </a>
               <a href="#" className="flex items-center gap-2 border-2 rounded-b-lg p-4">
                <FaInstagram></FaInstagram>
                Instagram
               </a>
            </div>
            <div className="p-4  space-y-4 bg-[#F3F3F3] rounded-xl">
                <h1 className="text-xl font-semibold text-[#403F3F] mb-3">Q Zone</h1>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />

            </div>
        </div>
    );
};

export default RightSideBar;