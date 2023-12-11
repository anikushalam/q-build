import React from "react";
import IssuedBookItem from "../../IssuedBooks/IssuedBookItem";
import style from "../LibraryMembers.module.css";
import QvipleLoading from "../../../../../../../Loader/QvipleLoading";

const BorrowedBooks = React.forwardRef((props, ref) => (
  <div className={style.membersContainer}>
    {props?.borrowList?.map((book, index) =>
      props?.borrowList?.length === index + 1 ? (
        <div key={index} ref={ref} className={style.limember}>
          <IssuedBookItem
            book={book}
            member={props?.member}
            issueId={book?._id}
            onRefetchWhenBookCollect={props?.onRefetchWhenBookCollect}
          />
        </div>
      ) : (
        <div key={index} className={style.limember}>
          <IssuedBookItem
            book={book}
            member={props?.member}
            issueId={book?._id}
            onRefetchWhenBookCollect={props?.onRefetchWhenBookCollect}
          />
        </div>
      )
    )}
    {props?.showingDataLoading && <QvipleLoading />}
    {!props?.showingDataLoading && props?.borrowList?.length === 0 && (
      <div className={style.noData}>
        <img src="/images/nodata.jpg" alt="" />
      </div>
    )}
  </div>
));

export default BorrowedBooks;
