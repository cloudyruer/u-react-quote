import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];

const QuoteDetail = () => {
  const { path, url } = useRouteMatch();
  const { quoteId } = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);

  console.log(path, url);

  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />

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
