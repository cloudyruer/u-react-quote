import { useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {
  const { path, url } = useRouteMatch();
  const { quoteId } = useParams();

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found</p>;
  }

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />

      <Route path={path} exact>
        <div className="centered">
          <Link className="btn--flat" to={url + "/comments"}>
            Load comments
          </Link>
        </div>
      </Route>

      <Route path={path + "/comments"}>
        <Comments />
      </Route>

      {/* <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route> */}
    </>
  );
};

export default QuoteDetail;
