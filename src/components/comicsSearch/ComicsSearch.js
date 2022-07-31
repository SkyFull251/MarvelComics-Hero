import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './comicsSearch.scss';

const ComicsSearch = () => {
    const [comic, setComic] = useState(null);
    const { getAllComicsByTitle, clearError, process, setProcess } = useMarvelService();

    const onComicLoaded = (comic) => {
        setComic(comic);
        console.log(comic);
    }

    const updateComic = (comicName) => {
        clearError();

        getAllComicsByTitle(comicName)
            .then(onComicLoaded)
            .then(() => setProcess('confirmed'));
    }

    const errorMessage = process === 'error' ? <div className="comic__search-critical-error"><ErrorMessage /></div> : null;
    const results = !comic ? null : comic.length > 0 ?
        <div className="comic__search-wrapper">
            <div className="comic__search-success">There is! Visit " {comic[0].title} " page?</div>
            <Link to={`/comics/${comic[0].id}`} className="button button__secondary comic__button-success">
                <div className="inner">To page</div>
            </Link>
        </div> :
        <div className="comic__search-error">
            The comic was not found. Check the title and try again
        </div>;

    return (
        <div className="comic__search-form">
            <Formik
                initialValues={{
                    comicName: ''
                }}
                validationSchema={Yup.object({
                    comicName: Yup.string().required('This field is required')
                })}
                onSubmit={({ comicName }) => {
                    updateComic(comicName);
                }}>
                <Form>
                    <div className="comic__search-wrapper">
                    <label className="comic__search-label" htmlFor="comicName">Find a comic by title:</label>
                        <Field
                            type="text"
                            name='comicName'
                            id='comicName'
                            placeholder="Enter title" />
                        <button
                            type='submit'
                            className="button button__main"
                            disabled={process === 'loading'}>
                            <div className="inner">find</div>
                        </button>
                    </div>
                    <FormikErrorMessage component="div" className="comic__search-error" name="comicName" />
                </Form>
            </Formik>
            {results}
            {errorMessage}
        </div>
    )
}

export default ComicsSearch;