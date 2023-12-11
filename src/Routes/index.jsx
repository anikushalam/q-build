import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../App.css";
// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import ProtectedRoutes from "./ProtectedRoutes";
// import DOMPurify from 'dompurify';
// import NoInternet from "../NoInternet/NoInternet";
import { useState } from "react";
import QLoader from "../Loader/QLoader";
import InsEventDept from "../EventDept/InsEventDept";
import AlumniConfig from "../MembersTab/staff/configuration/AlumniConfig";
import { useCheckedLogin } from "../oneTimeLogin/one-time-login";
import GeneratePdf from "../GeneratePdf";

const Login = lazy(() => import("../Authentication/Login/Login"));
const SignUp = lazy(() => import("../Authentication/Signup/SignUp"));

const InsDashboard = lazy(() => import("../Dashboard/Dashboard"));
const InsLibrary = lazy(() => import("../Library/Institute/InsLibrary"));

const SearchResult = lazy(() => import("../Search/SearchWrapper"));
const InsProfileSetting = lazy(() =>
  import("../ProfileSetting/ProfileSetting")
);
const InsNotification = lazy(() => import("../Notification/Notificattion"));
const InsProfile = lazy(() => import("../Profile/Profile"));
const InsFollowAndFollowing = lazy(() =>
  import("../Profile/Institute/Pages/FollowAndFollowing")
);
const InsEditProfile = lazy(() => import("../Profile/Edit"));
const InsDepartments = lazy(() =>
  import("../Department/Institute/Pages/Department")
);
const InsClass = lazy(() =>
  import("../Department/Institute/Pages/ClassProfile")
);
const InstituteDepartmentConfig = lazy(() =>
  import("../StaffTab/InstituteDepartmentConfig")
);

const InstituteStaffConfig = lazy(() =>
  import("../StaffTab/InstituteStaffConfig")
);
const InstituteStudentConfig = lazy(() =>
  import("../StaffTab/InstituteStudentConfig")
);
const InstituteSettingConfig = lazy(() =>
  import("../StaffTab/InstituteSetting/InstituteSettingConfig")
);
const InstituteExcelImportConfig = lazy(() =>
  import("../ExcelImport/InstituteExcelImportConfig")
);

const SuperAdmin = lazy(() => import("../SuperAdmin/SuperAdmin"));
const Terms = lazy(() => import("../TAC/Terms"));
const Privacy = lazy(() => import("../Privacy/Privacy"));
const Error = lazy(() => import("../Error/Error"));
const StaffMembersTab = lazy(() =>
  import("../MembersTab/staff/StaffMembersTab")
);
const StudentMembersTab = lazy(() =>
  import("../MembersTab/student/StudentMembersTab")
);
const EmptyMembersTab = lazy(() => import("../MembersTab/MembersTab"));
const InsFinance = lazy(() => import("../Finance/Institute/InsFinance"));
const AdmisionAdmin = lazy(() =>
  import("../AdmisionAdmin/InstituteAdmisionAdmin")
);
const UserFollowAndFollowing = lazy(() =>
  import(
    "../Profile/User/Pages/FollowFollowingandCircle/FollowAndFollowingCircle"
  )
);
const StudentMCQ = lazy(() =>
  import("../MembersTab/student/Mainbody/StudentClass/Exam/Mcq/StudentMCQ")
);
const AnswerSheet = lazy(() =>
  import(
    "../MembersTab/student/Mainbody/StudentClass/Exam/Mcq/AnswerSheet/AnswerSheet"
  )
);
const InsSportsAndArts = lazy(() =>
  import("../SportsAndArts/InsSportsAndArts/InsSportsAndArts")
);

const JoiningFormProcess = lazy(() =>
  import("../JoiningForm/JoiningFormProcess")
);
const EditForm = lazy(() => import("../JoiningForm/Edit/EditForm"));
const StudentProfileInClassView = lazy(() =>
  import(
    "../MembersTab/staff/Mainbody/ClassTeacher/Profile/StudentProfileInClassView"
  )
);
const StudentProfileInHostelView = lazy(() =>
  import(
    "../MembersTab/staff/Mainbody/ClassTeacher/Profile/StudentProfileInHostelView"
  )
);
const DepartmentConfig = lazy(() =>
  import("../MembersTab/staff/configuration/DepartmentConfig")
);

const ClassConfig = lazy(() =>
  import("../MembersTab/staff/configuration/ClassConfig")
);

const SubjectConfig = lazy(() =>
  import("../MembersTab/staff/configuration/SubjectConfig")
);

const FinanceConfig = lazy(() =>
  import("../MembersTab/staff/configuration/FinanceConfig")
);

const AdmissionConfig = lazy(() =>
  import("../MembersTab/staff/configuration/AdmissionConfig")
);
const StaffSelfAccessConfig = lazy(() =>
  import("../MembersTab/staff/configuration/StaffSelfAccessConfig")
);
const SportDepartmentConfig = lazy(() =>
  import("../MembersTab/staff/configuration/SportDepartmentConfig")
);
const SportClassConfig = lazy(() =>
  import("../MembersTab/staff/configuration/SportClassConfig")
);
const ApplicationStatusConfig = lazy(() =>
  import("../MembersTab/staff/configuration/ApplicationStatusConfig")
);
const LibraryConfig = lazy(() =>
  import("../MembersTab/staff/configuration/LibraryConfig")
);
const StudentConfig = lazy(() =>
  import("../MembersTab/staff/configuration/StudentConfig")
);
const StudentSelfAccessConfig = lazy(() =>
  import("../MembersTab/staff/configuration/StudentSelfAccessConfig")
);

const EventAdminConfig = lazy(() =>
  import("../MembersTab/staff/configuration/EventAdminConfig")
);

const SiteEdit = lazy(() => import("../Profile/Institute/Pages/Site/SiteEdit"));
const InsCareer = lazy(() => import("../InsCareer/InsCareer"));
const InsTender = lazy(() => import("../InsTender/InsTender"));
const InsAlumni = lazy(() => import("../InsAlumni/InsAlumni"));
const InstituteModerator = lazy(() =>
  import("../InstituteModerator/InstituteModerator")
);

const PromoteConfig = lazy(() =>
  import("../MembersTab/staff/configuration/PromoteConfig")
);
const ExamConfig = lazy(() =>
  import("../MembersTab/staff/configuration/ExamConfig")
);
const CertificateConfig = lazy(() =>
  import("../MembersTab/staff/configuration/CertificateConfig")
);

const HashtagProfile = lazy(() => import("../HashtagProfile/HashtagProfile"));
const InstituteHostel = lazy(() =>
  import("../InstituteHostel/InstituteHostel")
);
const HostelConfig = lazy(() =>
  import("../MembersTab/staff/configuration/HostelConfig")
);

const HostelSearchProfile = lazy(() =>
  import("../HostelJoiningForm/HostelSearchProfile")
);
const StudentHostelForm = lazy(() =>
  import("../JoiningForm/Student/StudentHostelForm")
);
const StudentHostelConfig = lazy(() =>
  import("../MembersTab/staff/configuration/StudentHostelConfig")
);

const InstituteTransport = lazy(() =>
  import("../InstituteTransport/InstituteTransport")
);

const TransportConfig = lazy(() =>
  import("../MembersTab/staff/configuration/TransportConfig")
);
const BacklogSubjectMarksUpdate = lazy(() =>
  import(
    "../MembersTab/staff/Mainbody/SubjectTeacher/MarkDetails/BacklogSubjectMarksUpdate"
  )
);
const StudentAdmissionFeesInClassView = lazy(() =>
  import(
    "../MembersTab/staff/Mainbody/ClassTeacher/Profile/StudentAdmissionFeesInClassView"
  )
);
const HostelWardenConfig = lazy(() =>
  import("../MembersTab/staff/configuration/HostelWardenConfig")
);

const IdConfig = lazy(() =>
  import("../MembersTab/staff/configuration/IdConfig")
);
const LeavingCertificateConfig = lazy(() =>
  import(
    "../MembersTab/staff/Mainbody/CertificateAuthority/LeavingCertificateConfig"
  )
);
const AcademicAdministratorConfig = lazy(() =>
  import("../MembersTab/staff/configuration/AcademicAdministratorConfig")
);

const MentorConfig = lazy(() =>
  import("../MembersTab/staff/configuration/MentorConfig")
);
const FacilitiesConfig = lazy(() =>
  import("../Profile/Institute/Pages/Site/Facilities/Facilities")
);
const AcademicsConfig = lazy(() =>
  import("../Profile/Institute/Pages/Site/Academics/AcademicSite")
);
const GovernenceConfig = lazy(() =>
  import("../Profile/Institute/Pages/Site/GoverningBody/GoverningBody")
);
const NssConfig = lazy(() => import("../Profile/Institute/Pages/Site/nss/Nss"));

const StaffProfileInHead = lazy(() =>
  import("../MembersTab/staff/Mainbody/ClassTeacher/Profile/StaffProfileInHead")
);
const LeaveAndTransferConfig = lazy(() =>
  import("../MembersTab/staff/configuration/LeaveAndTransferConfig")
);

function AllRoute() {
  // axios.defaults.withCredentials = true;
  // const sanitizedBlog=DOMPurify.sanitize(content to be sanitize)
  const [ins, setIns] = useState(true);
  const { isLoggedIn } = useCheckedLogin();
  return (
    <Suspense fallback={<QLoader />}>
      <div className="App">
        {/* <div dangerouslySetInnerHTML={{__html: sanitizedBlog}}>
      </div> */}
        <Router>
          <Routes>
            {/* {`${window.navigator.onLine}` === "true" ? ( */}
            <>
              {/* for landing page all URL */}
              <Route
                path="/"
                exact
                element={<Login ins={ins} switchUser={(w) => setIns(w)} />}
              />
              <Route
                path="/login"
                exact
                element={<Login ins={ins} switchUser={(w) => setIns(w)} />}
              />
              <Route
                path="/signup"
                exact
                element={<SignUp switchUser={(w) => setIns(w)} />}
              />
              {/* <Route path="/q/pricing" exact element={<Pricing />} /> */}
              {/* <Route
                path="/qviple/services/:service"
                exact
                element={<ServiceDetails />}
              /> */}
              {/* <Route path="/insHome" exact element={<InsHome />} />
              <Route
                path="/q/career"
                exact
                element={<Career careeers={careeers} setCareers={setCareers} />}
              /> */}
              <Route path="/q/terms/condition" exact element={<Terms />} />
              <Route path="/q/privacy/policy" exact element={<Privacy />} />
              {/* for dashboard and profile related url  */}
              <Route
                path="/q/:username/feed"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <InsDashboard />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/search"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <SearchResult />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/notifications"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <InsNotification />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/profile"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <InsProfile />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/following"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <InsFollowAndFollowing />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/connections"
                exact
                element={<UserFollowAndFollowing />}
              />
              <Route
                path="/q/:username/settings"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <InsProfileSetting />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/edit"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <InsEditProfile />
                  </ProtectedRoutes>
                }
              />
              {/* for institute side related all department url  */}
              <Route
                path="/q/:username/department"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <InstituteDepartmentConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/staff"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <InstituteStaffConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/student"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <InstituteStudentConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/other/setting"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <InstituteSettingConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/excel/import"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <InstituteExcelImportConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/viewdept"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <InsDepartments />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/class"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <InsClass />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/admission"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <AdmisionAdmin />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/library"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <InsLibrary />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/hostel"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <InstituteHostel />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/transport"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <InstituteTransport />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/events"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <InsEventDept />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/finance"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <InsFinance />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/sportsandarts"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <InsSportsAndArts />
                  </ProtectedRoutes>
                }
              />
              {/* for staff and student form related all url */}
              <Route path="/q/joining" exact element={<JoiningFormProcess />} />
              <Route
                path="/q/:username/edit/:activeform"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <EditForm />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/career"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <InsCareer />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/tender"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <InsTender />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/alumni"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <InsAlumni />
                  </ProtectedRoutes>
                }
              />
              {/* for member tab related all url  */}
              <Route
                path="/q/:username/staff/memberstab"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <StaffMembersTab />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/student/memberstab"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <StudentMembersTab />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/memberstab"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <EmptyMembersTab />
                  </ProtectedRoutes>
                }
              />
              {/* new all url generate for one by one department  */}
              <Route
                path="/q/:username/member/status"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <ApplicationStatusConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/member/department/:deptname"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <DepartmentConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/member/class/:cname"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <ClassConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/member/subject/:sname"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <SubjectConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/member/staff/finance"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <FinanceConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/member/admission"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <AdmissionConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/member/sport/department"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <SportDepartmentConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/member/sport/class/:cname"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <SportClassConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/member"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <StaffSelfAccessConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/member/library"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <LibraryConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/member/events"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <EventAdminConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/member/alumni"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <AlumniConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/member/student"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <StudentSelfAccessConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/member/student/class"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <StudentConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/student/profile"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <StudentProfileInClassView />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/student/profile/hostel"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <StudentProfileInHostelView />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/student/profile/admission"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <StudentAdmissionFeesInClassView />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/staff/profile"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <StaffProfileInHead />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/student/:subject/mcq/test"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <StudentMCQ />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/student/:subject/mcq/test/result"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <AnswerSheet />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/edit/site"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <SiteEdit />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/moderator"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <InstituteModerator />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/member/promote"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <PromoteConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/member/exam"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <ExamConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/member/certificate"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <CertificateConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/hashtag/:hashtagName"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <HashtagProfile />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/member/hostel"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <HostelConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/member/transport"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <TransportConfig />
                  </ProtectedRoutes>
                }
              />{" "}
              <Route
                path="/q/:username/member/backlog/subject/marks"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <BacklogSubjectMarksUpdate />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/hostel/profile"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <HostelSearchProfile />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/member/student/hostel"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <StudentHostelConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/hostel/joining"
                exact
                element={<StudentHostelForm />}
              />
              <Route
                path="/q/:username/member/hostel/warden"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <HostelWardenConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/member/idcard"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <IdConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/student/certificate/form"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <LeavingCertificateConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/member/administrator"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <AcademicAdministratorConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/member/mentor"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <MentorConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/member/leavestransfer"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <LeaveAndTransferConfig />
                  </ProtectedRoutes>
                }
              />
              <Route path="/form" exact element={<GeneratePdf />} />
              {/* for superadmin related all url  */}
              <Route
                path="/q/:username/superadmin"
                exact
                element={
                  // <ProtectedRoutes isLoggedIn={auth}>
                  <SuperAdmin />
                  // </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/facilities"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <FacilitiesConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/academics"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <AcademicsConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/governence"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <GovernenceConfig />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/q/:username/nss"
                exact
                element={
                  <ProtectedRoutes isLoggedIn={isLoggedIn}>
                    <NssConfig />
                  </ProtectedRoutes>
                }
              />
              <Route path="*" exact element={<Error />} />
            </>
            {/* ) : (
              <Route path="*" exact element={<NoInternet />} />
            )} */}
          </Routes>
        </Router>
      </div>
    </Suspense>
  );
}

export default AllRoute;
