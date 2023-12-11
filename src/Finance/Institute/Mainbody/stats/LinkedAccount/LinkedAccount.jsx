import React, { useEffect, useState } from "react";
import style from "./LinkedAccount.module.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import CustomSuspense from "../../../../../Custom/SuspenseLoading/CustomSuspense";
import { useGetPaymentDetail } from "../../../../../hooks/institute/institute-finance-api";
const ShowForm = React.lazy(() => import("./ShowForm"));
const LinkedForm = React.lazy(() => import("./LinkedForm"));
const UpdateLinkedForm = React.lazy(() => import("./UpdateLinkedForm"));

export default function LinkedAccount() {
  const [index, setIndex] = useState(0);
  const id = useSelector((state) => state.idChange.id);
  const { getPaymentDetail, getPaymentDetailRefetch } = useGetPaymentDetail({
    id: id,
    skip: !id,
  });
  const { t } = useTranslation();

  useEffect(() => {
    if (id) getPaymentDetailRefetch();
  }, [id, getPaymentDetailRefetch]);

  // console.info("thsafsdgsas", status);

  return (
    <>
      <div className={style.linkedAccount}>
        {index !== 2 ? (
          getPaymentDetail?.bank?.razor_account ? (
            <CustomSuspense>
              <ShowForm
                bank={getPaymentDetail?.bank}
                onRefetch={getPaymentDetailRefetch}
                setIndex={setIndex}
              />
            </CustomSuspense>
          ) : getPaymentDetail?.bank?.bankAccountNumber ? (
            <CustomSuspense>
              <ShowForm
                bank={getPaymentDetail?.bank}
                onRefetch={getPaymentDetailRefetch}
                setIndex={setIndex}
              />
            </CustomSuspense>
          ) : (
            index === 0 && (
              <div className={style.linkedButton}>
                <div className={style.btn} onClick={() => setIndex(1)}>
                  {t("link_account")}
                </div>
              </div>
            )
          )
        ) : (
          ""
        )}
        {index === 1 && (
          <CustomSuspense>
            <LinkedForm
              onRefetch={getPaymentDetailRefetch}
              setIndex={setIndex}
            />
          </CustomSuspense>
        )}

        {index === 2 && (
          <CustomSuspense>
            <UpdateLinkedForm
              onRefetch={getPaymentDetailRefetch}
              bankDetail={getPaymentDetail?.bank}
              setIndex={setIndex}
            />
          </CustomSuspense>
        )}
      </div>
    </>
  );
}
