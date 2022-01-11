import React from "react";
import { getAllNews } from "../../utils/dataApi";
import { Link } from "react-router-dom";

function News() {
  const [news, setNews] = React.useState([]);
  React.useEffect(() => {
    async function fatchData() {
      const allNews = await getAllNews("?limit=30&type=news");
      console.log("all news ", allNews);

      setNews(allNews?.data ? allNews.data?.news : []);
    }
    fatchData();
  }, []);
  return (
    <div class="card" /*style={{ marginTop: 10 }}*/>
      <div class="card">
        <div class="card-body">
          <h6 class="card-subtitle mb-2 text-muted">News</h6>
          <marquee
            direction="up"
            behavior="scroll"
            scrollamount="3"
            // vspace="10"
            // onMouseOver="this.stop();"
            // onMouseOut="this.start();"
            height="300px"
            width="100%"
          >
            {/* <div
            class="marqueens ver"
            data-direction="up"
            // data-duration="50"
            data-pauseOnHover="true"
          > */}
            <ul
              id="ticker01"
              style={{
                listStyle: "none",
                paddingLeft: 0,
              }}
            >
              {news != undefined &&
                news.map((value, index) => {
                  return (
                    <>
                      <li>
                        <span className="news-time">
                          08/11/2021&nbsp;10:44 AM IST
                        </span>
                        {/* <p className="news-text text-truncate">
                          <a href="#">{value.title}</a>
                        </p> */}
                        <Link to={"/news/descp/" + value._id}>
                          {value.title}
                        </Link>
                        {/* <span>08/11/2021&nbsp;10:44 AM IST</span> */}
                      </li>
                      <hr class="hr" />
                    </>
                  );
                })}
            </ul>
            {/* </div> */}
          </marquee>
        </div>
      </div>
    </div>
  );
}

export default News;
