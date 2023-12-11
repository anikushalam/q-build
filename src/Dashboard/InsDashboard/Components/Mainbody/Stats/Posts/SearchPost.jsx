import React from "react";
import { useProfileAllPost } from "../../../../../../Post/Institute/Components/post-api";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { postChangeAction } from "../../../../../../redux/store/post-slice";
import { instituteAs } from "../../../../../../constant/constant_value";
import PostTypeConfiguration from "./PostTypeConfiguration";
import QvipeLoaderGif from "../../../../../../Loader/QvipleLoaderGif";

function SearchPost({ profilePost }) {
  //for The redux storage and actions
  const ids = useSelector((state) => state.idChange);
  const allPosts = useSelector((state) => state.postChange);
  const dispatch = useDispatch();
  const [load, setLoad] = useState(true);
  //for the infinite scroll
  const [ref, inView] = useInView();
  const [profileState, setProfileState] = useState(true);
  const [profilePage, setProfilePage] = useState(1);

  const { allProfilePost, allProfilePostRefetch } = useProfileAllPost({
    data: {
      id: ids?.searchProfile?.id,
      page: profilePage,
      limit: 10,
      viewAs: instituteAs,
    },
    skip: !profilePost ? true : !ids?.searchProfile?.id,
  });

  //for the remove old search
  useEffect(() => {
    if (ids?.searchProfile?.id) {
      dispatch(
        postChangeAction.removeSearchPost({
          search: [],
        })
      );
      setProfilePage(1);
      setProfileState(true);
    }
  }, [dispatch, ids?.searchProfile?.id]);

  //for the infinite scroll then change the page
  useEffect(() => {
    if (inView && profileState && profilePost)
      setProfilePage((profilePage) => profilePage + 1);
    else {
    }
  }, [inView, profilePost, profileState]);

  //for the refteching after the page is reset
  useEffect(() => {
    if (ids?.searchProfile?.id) allProfilePostRefetch();
  }, [profilePage, ids?.searchProfile?.id, profilePost, allProfilePostRefetch]);

  //for the action pperform each time when the new data is comming from api
  useEffect(() => {
    //dispatch actions
    dispatch(
      postChangeAction.addPost({
        post: !profilePost
          ? []
          : allProfilePost?.post?.[0]?.author === ids?.searchProfile.id
          ? allProfilePost?.post
          : [],
        profilePost: !profilePost ? "dash" : "search",
      })
    );

    //for next api is call or not profile
    if (allProfilePost?.post.length === 10) setProfileState(true);
    else setProfileState(false);
  }, [allProfilePost?.post, dispatch, profilePost, ids?.searchProfile?.id]);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);

  return (
    <div>
      {!allPosts?.searchPosts?.length && profilePost && load ? (
        <QvipeLoaderGif />
      ) : (
        allPosts?.searchPosts?.map((data, index) =>
          allPosts?.searchPosts?.length === index + 1 ? (
            <div ref={ref} key={index}>
              <PostTypeConfiguration
                post={data}
                profilePost={profilePost}
                allPosts={[]}
              />
            </div>
          ) : (
            <PostTypeConfiguration
              key={index}
              post={data}
              profilePost={profilePost}
              allPosts={[]}
            />
          )
        )
      )}
    </div>
  );
}

export default SearchPost;
