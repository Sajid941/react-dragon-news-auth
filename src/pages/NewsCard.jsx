import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const NewsCard = ({ news }) => {
    const {image_url,title,details,_id}=news
    return (
        <div className="card  bg-base-100 shadow-xl mb-20">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    details.length > 200 ? <p>{details.slice(0,200)}</p>:<p>{details} <Link to={`/news/${_id}`} className='text-blue-500'>Read more...</Link></p>
                }
               
            </div>
        </div>
    );
};

export default NewsCard;
NewsCard.propTypes = {
    news: PropTypes.object
}