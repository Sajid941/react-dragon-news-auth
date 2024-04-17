import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex gap-2 my-5">
            <button className='btn btn-secondary text-white'>Breaking News</button>
            <Marquee pauseOnHover={true}>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default BreakingNews;