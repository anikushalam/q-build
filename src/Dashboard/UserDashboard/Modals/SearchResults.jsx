import { useNavigate } from "react-router";
import style from "./SearchModal.module.css";

const SearchResults = ({ queryContent, setQueryValue }) => {
  const navigate = useNavigate();

  const AddRecentSearch = (query) => {
    navigate(`/${query}`);
  };

  return (
    <>
      {queryContent &&
        queryContent.map((qc, index) => (
          <div className={style.searchResult} key={index}>
            <div className={style.searchResultLeft}>
              <img src="/images/member_tab/class/default_avatar.svg" alt="" />
              <div>
                {/* <h6>Parag Hude</h6> */}
                <p onClick={() => AddRecentSearch(qc && qc.id)}>
                  {qc && qc.name}
                </p>
              </div>
            </div>
            <img
              className={style.recentIcon}
              src="/images/search-dash-icon.svg"
              onClick={() => {
                setQueryValue(qc && qc.name);
              }}
              alt=""
            />
          </div>
        ))}
    </>
  );
};

export default SearchResults;
