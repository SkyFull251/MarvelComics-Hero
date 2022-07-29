import './singleCharacterLayout.scss';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const SingleCharacterLayout = ({data}) => {

    const {name, description, thumbnail} = data;

    return (
        <div className="single-comic">
            <Helmet>
                <meta
                    name="description"
                    content={`Character: ${name}`}
                />
                <title>{name}</title>
            </Helmet>
            <img src={thumbnail} alt={name} className="single-comic__char-img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{name}</h2>
                <p className="single-comic__descr">{description}</p>
            </div>
            <Link to='/' className="button button__main button__long">
                <div className="inner">Back to main page</div>
            </Link>
        </div>
    )
}

export default SingleCharacterLayout;