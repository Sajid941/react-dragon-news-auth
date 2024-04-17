import { useParams } from "react-router-dom";
import Header from "./shared/Header";
import RightSideBar from "./shared/RightSideBar";

const News = () => {
    const {id} =useParams()
    console.log(id)
    return (
        <div>
            <Header></Header>
            
            <div className="grid md:grid-cols-4 mt-10">
                <div className="col-span-3">
                    <h1>Hello</h1>
                </div>
                <div>
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default News;