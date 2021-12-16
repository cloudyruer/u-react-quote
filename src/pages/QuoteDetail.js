import { useParams, Route } from "react-router-dom";

import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const { quoteId } = useParams();

  return (
    <>
      <h1>Quote Detail Page</h1>
      <p>{quoteId}</p>
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
      {/* <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route> */}
    </>
  );
};

export default QuoteDetail;
