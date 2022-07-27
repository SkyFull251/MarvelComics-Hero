import './singleCharacterLayout.scss';
import { Link } from 'react-router-dom';

const SingleCharacterLayout = ({data}) => {

    const {name, description, thumbnail} = data;

    return (
        <div className="single-comic">
            <img src={thumbnail} alt={name} className="single-comic__char-img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{name}</h2>
                <p className="single-comic__descr">{description}</p>
            </div>
            <button className="button button__main button__long">
                <Link to='/' className="inner">Back to main page</Link>
            </button>
        </div>
    )
}

export default SingleCharacterLayout;