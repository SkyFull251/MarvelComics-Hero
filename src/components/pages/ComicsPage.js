import { Helmet } from "react-helmet";

import AppBanner from "../appBanner/AppBanner";
import ComicsList from '../comicsList/ComicsList';
import ComicsSearch from "../comicsSearch/ComicsSearch";

const ComicsPage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Page with list of our comics"
                />
                <title>Comics page</title>
            </Helmet>
            <AppBanner />
            <ComicsSearch/>
            <ComicsList />
        </>
    )
}
export default ComicsPage;