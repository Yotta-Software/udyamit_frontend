import React from "react";
import desc from "../../asstes/desc.jpg";
import { useHistory, useParams } from "react-router-dom";
import { getNews } from "../../utils/dataApi";

function NewsDiscp() {
  const history = useHistory();
  let { nid } = useParams();

  const [news, setNews] = React.useState(null);
  React.useEffect(() => {
    async function fetchData() {
      const newsData = await getNews("?id=" + nid);

      setNews(newsData && newsData.news);
    }
    fetchData();
    return () => {
      setNews(null);
    };
  }, []);
  // alert(id);
  return (
    <div className="container">
      <div
        class="card mb-3"
        style={{ border: "none", borderRadius: 0, marginTop: 10 }}
      >
        <div class="row g-0">
          {/* <div class="col-md-4">
            <img src={desc} class="img-fluid" alt="desc" />
          </div> */}
          <div class="col-md-8">
            {news ? (
              <div class="card-body">
                <h5 class="card-title">{news.title}</h5>
                <br />

                <h5 class="card-subtitle mb-2 text-muted">Description</h5>
                <p class="card-text">{news.description}</p>
              </div>
            ) : (
              <div class="card-body">Loading...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsDiscp;
