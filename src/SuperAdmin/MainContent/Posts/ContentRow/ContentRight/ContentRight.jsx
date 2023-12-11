import React, { useState, useEffect } from "react";
import style from "./ContentRight.module.css";
import EachPost from "./EachPost/EachPost";
import { useGetAllPlatformPostsQuery } from "../../../../../services/superAdminAPI";
import { useInView } from "react-intersection-observer";

function ContentRight() {
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [posts, setPosts] = useState([]);
  const [load, setLoad] = useState(true);
  const { data: platformPosts, refetch: platformFetch } =
    useGetAllPlatformPostsQuery({
      info: {
        page: page,
        limit: 10,
      },
      // skip: isPage,
    });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (page) platformFetch();
  }, [page, platformFetch]);

  useEffect(() => {
    if (platformPosts?.all) setPosts([...posts, ...platformPosts?.all]);
    if (platformPosts?.all?.length === 10) setState(true);
    else setState(false);
  }, [platformPosts?.all]);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 4000);
  }, []);
  return (
    <div className={style.contentRight}>
      {!posts?.length && load ? (
        <div className={style.loader}>
          <img src="/images/loader/loader.gif" alt="" />
        </div>
      ) : (
        posts?.map((post, index) =>
          posts?.length === index + 1 ? (
            <div ref={ref} key={index}>
              <EachPost post={post} />
            </div>
          ) : (
            <EachPost key={index} post={post} />
          )
        )
      )}

    </div>
  );
}

export default ContentRight;
