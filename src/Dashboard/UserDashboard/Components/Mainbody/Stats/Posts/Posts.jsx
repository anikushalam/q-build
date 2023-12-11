import React from "react";
import style from "./Posts.module.css";
import EachPost from "./EachPost/EachPost";
import {
  useDashAllPost,
  useProfileAllPost,
  useProfileAllSavedPost,
  useProfileAllTagPost,
} from "../../../../../../Post/Institute/Components/post-api";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { postChangeAction } from "../../../../../../redux/store/post-slice";
import { userAs } from "../../../../../../constant/constant_value";
import Suggestion from "./Suggestion/Suggestion";
import Hashtag from "./Hashtag/Hashtag";
function Posts({ profilePost, profileData, profileSavedPost }) {
  //for The redux storage and actions
  const ids = useSelector((state) => state.idChange);
  const author = useSelector((state) => state.authChange);
  const allPosts = useSelector((state) => state.postChange);
  const dispatch = useDispatch();
  const insId = localStorage.getItem("user");
  const [load, setLoad] = useState(true);
  //for the infinite scroll
  const [ref, inView] = useInView();

  //for the fetch more or not after seeing all post
  const [state, setState] = useState(true);
  const [profileState, setProfileState] = useState(true);
  const [profileSavedState, setProfileSavedState] = useState(true);
  const [profileTagState, setProfileTagState] = useState(true);

  //for setting the next page to fetch data
  const [page, setPage] = useState(1);
  const [profilePage, setProfilePage] = useState(1);
  const [profileSavedPage, setProfileSavedPage] = useState(1);
  const [profileTagPage, setProfileTagPage] = useState(1);

  //for the rtk query to call api
  const { allDashPost, allDashPostRefetch } = useDashAllPost({
    data: {
      id: insId ? insId : author?.id,
      page: page,
      limit: 10,
      viewAs: userAs,
    },
    skip: profilePost,
  });
  const { allProfilePost, allProfilePostRefetch } = useProfileAllPost({
    data: {
      id: ids?.searchProfile?.id ? ids?.searchProfile?.id : ids?.id,
      page: profilePage,
      limit: 10,
      viewAs: userAs,
    },
    skip: !profilePost,
  });

  const { allProfileSavedPost, allProfileSavedPostRefetch } =
    useProfileAllSavedPost({
      data: {
        id: ids?.id,
        page: profileSavedPage,
        limit: 10,
        viewAs: userAs,
      },
      skip: !(profileSavedPost === "save") && !profilePost,
    });

  const { allProfileTagPost, allProfileTagPostRefetch } = useProfileAllTagPost({
    data: {
      id: ids?.id,
      page: profileTagPage,
      limit: 10,
      viewAs: userAs,
    },
    skip: !(profileSavedPost === "tag") && !profilePost,
  });

  //for the infinite scroll then change the page
  useEffect(() => {
    if (inView && state && !profilePost) setPage((page) => page + 1);
    else if (inView && profileState && profilePost)
      setProfilePage((profilePage) => profilePage + 1);
    else if (inView && profileSavedState && profileSavedPost === "save")
      setProfileSavedPage((profileSavedPage) => profileSavedPage + 1);
    else if (inView && profileTagState && profileSavedPost === "tag") {
      setProfileTagPage((profileTagPage) => profileTagPage + 1);
    } else {
    }
  }, [
    inView,
    state,
    profileState,
    profileSavedState,
    profileTagState,
    profilePost,
    profileSavedPost,
  ]);

  //for the refteching after the page is reset
  useEffect(() => {
    if (!profilePost) allDashPostRefetch();
    else if (profileSavedPost === "my") allProfilePostRefetch();
    else if (profileSavedPost === "save") allProfileSavedPostRefetch();
    else if (profileSavedPost === "tag") allProfileTagPostRefetch();
    else {
    }
  }, [
    page,
    profilePage,
    profileSavedPage,
    profileTagPage,
    profilePost,
    profileSavedPost,
    allDashPostRefetch,
    allProfilePostRefetch,
    allProfileSavedPostRefetch,
    allProfileTagPostRefetch,
  ]);

  //for the action pperform each time when the new data is comming from api
  useEffect(() => {
    //dispatch actions
    dispatch(
      postChangeAction.addPost({
        post: !profilePost
          ? allDashPost?.post
          : profileSavedPost === "my"
          ? allProfilePost?.post
          : profileSavedPost === "save"
          ? allProfileSavedPost?.post
          : allProfileTagPost?.post,
        profilePost: !profilePost
          ? "dash"
          : profileSavedPost === "my"
          ? "profile"
          : profileSavedPost === "save"
          ? "saved"
          : "taged",
        id: ids?.id,
      })
    );

    //for next api is call or not dashboard
    if (allDashPost?.post.length === 10) setState(true);
    else setState(false);

    //for next api is call or not profile
    if (allProfilePost?.post.length === 10) setProfileState(true);
    else setProfileState(false);

    //for next api is call or not saved profile
    if (allProfileSavedPost?.post.length === 10) setProfileSavedState(true);
    else setProfileSavedState(false);

    //for next api is call or not tag profile
    if (allProfileTagPost?.post.length === 10) setProfileTagState(true);
    else setProfileTagState(false);
  }, [
    allDashPost?.post,
    allProfilePost?.post,
    allProfileSavedPost?.post,
    allProfileTagPost?.post,
    dispatch,
    profilePost,
    profileSavedPost,
    ids?.id,
  ]);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 5000);
  }, []);
  // console.info("this is all posts", allPosts);
  return (
    <div className={style.posts}>
      {!allPosts?.dashboardPosts?.length && !profilePost && load ? (
        <div className={style.loader}>
          <img src="/images/loader/loader.gif" alt="" />
        </div>
      ) : (
        !profilePost &&
        allPosts?.dashboardPosts?.map((data, index) =>
          allPosts?.dashboardPosts?.length === index + 1 ? (
            <div ref={ref} key={index}>
              <EachPost
                post={data}
                key={index}
                profilePost={profilePost}
                allPosts={allPosts?.dashboardPosts}
                profileData={profileData}
              />
            </div>
          ) : index === 2 ? (
            <Hashtag key={index} />
          ) : index === 4 ? (
            <Suggestion key={index} />
          ) : (
            <EachPost
              post={data}
              key={index}
              profilePost={profilePost}
              allPosts={allPosts?.dashboardPosts}
              profileData={profileData}
            />
          )
        )
      )}

      {profilePost &&
        profileSavedPost === "my" &&
        (!allPosts?.profilePosts?.length && load ? (
          <div className={style.loader}>
            <img src="/images/loader/loader.gif" alt="" />
          </div>
        ) : (
          allPosts?.profilePosts?.map((data, index) =>
            allPosts?.profilePosts?.length === index + 1 ? (
              <div ref={ref} key={index}>
                <EachPost
                  post={data}
                  key={index}
                  profilePost={profilePost}
                  allPosts={[]}
                  profileData={profileData}
                />
              </div>
            ) : (
              <EachPost
                post={data}
                key={index}
                profilePost={profilePost}
                allPosts={[]}
                profileData={profileData}
              />
            )
          )
        ))}

      {profilePost &&
        profileSavedPost === "save" &&
        (!allPosts?.profileSavedPosts?.length && load ? (
          <div className={style.loader}>
            <img src="/images/loader/loader.gif" alt="" />
          </div>
        ) : (
          allPosts?.profileSavedPosts?.map((data, index) =>
            allPosts?.profileSavedPosts?.length === index + 1 ? (
              <div ref={ref} key={index}>
                <EachPost
                  post={data}
                  key={index}
                  profilePost={profilePost}
                  allPosts={[]}
                  profileData={profileData}
                />
              </div>
            ) : (
              <EachPost
                post={data}
                key={index}
                profilePost={profilePost}
                allPosts={[]}
                profileData={profileData}
              />
            )
          )
        ))}

      {profilePost &&
        profileSavedPost === "tag" &&
        (!allPosts?.profileTagedPosts?.length && load ? (
          <div className={style.loader}>
            <img src="/images/loader/loader.gif" alt="" />
          </div>
        ) : (
          allPosts?.profileTagedPosts?.map((data, index) =>
            allPosts?.profileTagedPosts?.length === index + 1 ? (
              <div ref={ref} key={index}>
                <EachPost
                  post={data}
                  key={index}
                  profilePost={profilePost}
                  allPosts={[]}
                  profileData={profileData}
                />
              </div>
            ) : (
              <EachPost
                post={data}
                key={index}
                profilePost={profilePost}
                allPosts={[]}
                profileData={profileData}
              />
            )
          )
        ))}
    </div>
  );
}

export default Posts;
