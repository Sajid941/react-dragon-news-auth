import Header from "./shared/Header";
import Navbar from "./shared/Navbar";
import LeftSideBar from './shared/LeftSideBar';
import RightSideBar from './shared/RightSideBar';
import BreakingNews from "../components/BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
    const news = useLoaderData();
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h1 className="text-3xl">This is home</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 md:gap-6">
                <div>
                    <LeftSideBar></LeftSideBar>
                </div>
                <div className="col-span-2">
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default Home;