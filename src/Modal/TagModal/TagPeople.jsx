import React from "react";
import style from "./TagPeople.module.css";
import { useAddTagPeoplePost } from "../../Post/Institute/Components/post-api";
import { useInView } from "react-intersection-observer";
import { imageShowUrl } from "../../services/BaseUrl";
import { instituteAs } from "../../constant/constant_value";

function TagPeople({
  // open,
  setOpen,

  postTagSearch,
  setPostTagSearch,
  taggedPeoplehandler,
}) {
  const [searchTagPeople, setSearchTagPeople] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [state, setState] = React.useState(true);
  const [ref, inView] = useInView();
  const { addSearchTagPeople, addSearchTagPeopleRefetch } = useAddTagPeoplePost(
    {
      data: {
        viewAs: instituteAs,
        search: postTagSearch,
        page: page,
        limit: 10,
      },
      skip: postTagSearch !== "" ? false : true,
    }
  );

  React.useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  React.useEffect(() => {
    addSearchTagPeopleRefetch();
  }, [page, addSearchTagPeopleRefetch, postTagSearch]);

  React.useEffect(() => {
    if (addSearchTagPeople?.tagInstituteList)
      setSearchTagPeople(addSearchTagPeople?.tagInstituteList);

    //for next api is call or not dashboard
    if (addSearchTagPeople?.tagInstituteList.length === 10) setState(true);
    else setState(false);
  }, [addSearchTagPeople?.tagInstituteList]);

  const tagPeopleHandler = (val) => {
    const boj = {
      tagId: val._id,
      tagUserName: val.name,
      tagType: "Institute",
    };
    taggedPeoplehandler(boj);
    setPostTagSearch("");
    setOpen(false);
  };
  // console.log(searchTagPeople);
  return (
    <>
      {searchTagPeople?.map((tag, index) =>
        searchTagPeople?.length === index + 1 ? (
          <div className={style.eachposthead}>
            <div
              ref={ref}
              key={index}
              onClick={() => tagPeopleHandler(tag)}
              className={style.mainDiv}
            >
              <div className={style.imgcontainer}>
                <img
                  alt="not found"
                  src={
                    tag?.insProfilePhoto
                      ? `${imageShowUrl}/${tag?.insProfilePhoto}`
                      : "/images/ins_default_profile.svg"
                  }
                  className={style.iimg}
                />
              </div>
              <div className={style.eachpostUserName}>
                <h6>{tag.name}</h6>

                <div
                  className={style.eachpostUserTime}
                  style={{
                    display: "flex",
                    gap: "0.5vw",
                    alignItems: "center",
                  }}
                >
                  <p>{tag.insName}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={style.eachposthead}>
            <div
              key={index}
              onClick={() => tagPeopleHandler(tag)}
              className={style.mainDiv}
            >
              <div className={style.imgcontainer}>
                <img
                  alt="not found"
                  src={
                    tag?.insProfilePhoto
                      ? `${imageShowUrl}/${tag?.insProfilePhoto}`
                      : "/images/ins_default_profile.svg"
                  }
                  className={style.iimg}
                />
              </div>
              <div className={style.eachpostUserName}>
                <h6>{tag.name}</h6>

                <div
                  className={style.eachpostUserTime}
                  style={{
                    display: "flex",
                    gap: "0.5vw",
                    alignItems: "center",
                  }}
                >
                  <p>{tag.insName}</p>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}

export default TagPeople;
