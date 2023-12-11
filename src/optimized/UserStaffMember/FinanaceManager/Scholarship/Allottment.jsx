import { useFileUpload } from "../../../Hooks/ApiHooks/Auth/auth-api";
import { useFinanceAllotScholarshipExcel } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import QvipleLoader from "../../../Loader/QvipleLoader";
import AddButtonWrapper from "../../../Ui/Button/AddButtonWrapper";
import CreateButton from "../../../Ui/Button/CreateButton";
import UploadExcelButton from "../../../Ui/Button/UploadExcelButton";
import InstituteStudent from "../../../UserStaffMember/InstituteStudent/InstituteStudent";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Allottment = ({ aid, instituteId }) => {
  const navigate = useNavigate();
  const params = useParams();
  const getQuery = useLocation();
  const [disabled, setDisabled] = useState(false);
  const [allot, setAllot] = useState(false);
  const [fileUpload] = useFileUpload();
  const [financeAllotScholarshipExcel] = useFinanceAllotScholarshipExcel();
  const onExcelFileUpload = (e) => {
    if (e.target?.files?.length && aid) {
      setDisabled((pre) => !pre);
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      fileUpload({
        fileUpload: formData,
      })
        .then((res) => {
          if (res.data?.imageKey) {
            financeAllotScholarshipExcel({
              aid: aid,
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
    setAllot((pre) => !pre);
  };
  const onNavigate = (val) => {
    navigate(`/${params.username}/student/profile/admission`, {
      state: {
        ...getQuery.state,
        studentId: val?._id,
        collectAs: "SCHOLARSHIP",
      },
    });
  };
  return (
    <>
      <AddButtonWrapper>
        <UploadExcelButton onExcelFileUpload={onExcelFileUpload} />
        <CreateButton
          label="allot_scholarship"
          customStyle={{
            marginBlock: "0",
          }}
          onAction={onToggle}
        />
      </AddButtonWrapper>

      {disabled && <QvipleLoader />}
      {allot && (
        <InstituteStudent
          onClose={onToggle}
          onSelectStudent={onNavigate}
          instituteId={instituteId}
        />
      )}
    </>
  );
};

export default Allottment;
