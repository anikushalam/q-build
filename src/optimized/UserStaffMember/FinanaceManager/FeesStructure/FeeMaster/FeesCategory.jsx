import UploadExcelButton from "../../../../Ui/Button/UploadExcelButton";
import style from "../FeesStructure.module.css";
import CreateButton from "../../../../Ui/Button/CreateButton";
import { useState } from "react";
import { useFileUpload } from "../../../../Hooks/ApiHooks/Auth/auth-api";
import {
  useFinanceAddExcelCategory,
  useFinanceAllFeesCategory,
} from "../../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import FeesCategoryCard from "./FeesCategoryCard";
import QvipleLoader from "../../../../Loader/QvipleLoader";
import AddFeesCategory from "./AddFeesCategory";
import Loading from "../../../../Loader/Loading";
const FeesCategory = ({ fid }) => {
  const [disabled, setDisabled] = useState(false);
  const [addCategory, setAddCategory] = useState(false);

  const [fileUpload] = useFileUpload();
  const [financeAddExcelCategory] = useFinanceAddExcelCategory();
  const { financeAllFeesCategory, financeAllFeesCategoryLoading } =
    useFinanceAllFeesCategory({
      fid: fid,
      skip: !fid,
    });
  const onExcelFileUpload = (e) => {
    if (e.target.files[0]) {
      setDisabled((pre) => !pre);
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      fileUpload({
        fileUpload: formData,
      })
        .then((res) => {
          if (res.data?.imageKey) {
            financeAddExcelCategory({
              fid: fid,
              excelFile: {
                excel_file: res.data?.imageKey,
              },
            })
              .then(() => {
                setDisabled((pre) => !pre);
              })
              .catch({});
          } else {
            setDisabled((pre) => !pre);
          }
        })
        .catch({});
    }
  };

  const onToggle = () => {
    setAddCategory((pre) => !pre);
  };
  return (
    <>
      <div className={style.upload_excel_container}>
        <UploadExcelButton onExcelFileUpload={onExcelFileUpload} />
        <CreateButton
          label="add_new_category"
          customStyle={{
            marginBlock: "0.5rem",
          }}
          onAction={onToggle}
        />
      </div>
      {financeAllFeesCategoryLoading && <Loading />}

      {financeAllFeesCategory?.map((category) => (
        <FeesCategoryCard category={category} key={category?._id} fid={fid} />
      ))}
      {disabled && <QvipleLoader />}
      {addCategory && <AddFeesCategory onClose={onToggle} fid={fid} />}
    </>
  );
};

export default FeesCategory;
