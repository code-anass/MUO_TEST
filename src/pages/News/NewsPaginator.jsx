/**
 * Author: Anitha Gorli
 * Date: 3-APR-2023
 */
import React, { useEffect } from 'react';
import './News.css'

const NewsPaginator = ({ t }) => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, []);
  return (
    <div
      // className="col-md-2 col-sm-4 wow fadeInRight animated"
      style={{ visibility: "visible" }}
    >
      <strong>
        <h1>&nbsp;</h1>
        <div
          className="justify-content-md-center pagination pagination-md"
          style={{ fontSize: "large", textAlign: "center" }}
        >
          <ul className="pagination page-item">
            <li className="active">
              {/* <a
                className=" page-link"
                href="/app/muo/web/site/news?year=2023&page=1"
                data-page={0}
              >
                1
              </a> */}
            </li>
            <li>
              {/* <a
                className=" page-link"
                href="/app/muo/web/site/news?year=2023&page=2"
                data-page={1}
              >
                2
              </a> */}
            </li>
          </ul>{" "}
        </div>
      </strong>

    </div>


  )
}

export default NewsPaginator