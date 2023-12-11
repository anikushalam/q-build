import style from "./StaffForm.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const StaffFormPreview = () => {
  return (
    <>
      <div className={style.formDisplay}>
        <h5>Staff Joining Form</h5>
        <Link to="">
          <span>Add more options</span>
        </Link>
      </div>
      <div className="row">
        <div className="col-12">
          <div className={style.formArea}>
            <div className={style.formImage}>
              <img src="/images/Staff-avatar-icon.svg" alt="Staff Avatar" />
              <img
                src="/images/edit1-icon.svg"
                className={style.formEdit}
                alt="Edit Staff Avatar"
              />
            </div>
            <div className={`${style.formField} mt-5`}>
              <div>
                <label htmlFor="name" className="form-group mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control mb-5"
                  name="name"
                  id="name"
                  placeholder="Enter Name"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div>
                  <label htmlFor="DOB" className="form-group mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="form-control mb-5"
                    name="name"
                    id="DOB"
                  />
                </div>
              </div>
              <div className="col-6">
                <div>
                  <label htmlFor="gender" className="form-group mb-2">
                    Gender
                  </label>
                  <select className="form-control mb-5" name="name" id="name">
                    <option value="Select Gender">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div>
                  <label htmlFor="MotherName" className="form-group mb-2">
                    Mother's Name
                  </label>
                  <input
                    type="text"
                    className="form-control mb-5"
                    name="name"
                    id="MotherName"
                    placeholder="Enter Mother's Name"
                  />
                </div>
              </div>
              <div className="col-6">
                <div>
                  <label htmlFor="MotherTongue" className="form-group mb-2">
                    Mother's Tongue
                  </label>
                  <input
                    type="text"
                    className="form-control mb-5"
                    name="name"
                    id="MotherTongue"
                    placeholder="Enter Mother's Tongue"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div>
                  <label htmlFor="nationality" className="form-group mb-2">
                    Nationality
                  </label>
                  <select
                    className="form-control mb-5"
                    name="name"
                    id="nationality"
                  >
                    <option value="Select Nationality">
                      Select Nationality
                    </option>
                    <option value="Indian">Indian</option>
                    <option value="Non-resident Indian">
                      Non-resident Indian
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-6">
                <div>
                  <label htmlFor="cast" className="form-group mb-2">
                    Cast
                  </label>
                  <input
                    type="text"
                    className="form-control mb-5"
                    name="name"
                    id="cast"
                    placeholder="Please Enter your cast"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div>
                  <label htmlFor="category" className="form-group mb-2">
                    Cast Category
                  </label>
                  <select
                    className="form-control mb-5"
                    name="name"
                    id="category"
                  >
                    <option value="Select Cast Category">
                      Select Cast Category
                    </option>
                    <option value="General">General</option>
                    <option value="OBC">OBC</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                  </select>
                </div>
              </div>
              <div className="col-6">
                <div>
                  <label htmlFor="religion" className="form-group mb-2">
                    Religion
                  </label>
                  <select
                    className="form-control mb-5"
                    name="name"
                    id="religion"
                  >
                    <option value="Select Religion">Select Religion</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Muslim">Muslim</option>
                    <option value="Sikh">Sikh</option>
                    <option value="Christian">Christian</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div>
                  <label htmlFor="bPlace" className="form-group mb-2">
                    Birth Place
                  </label>
                  <input
                    type="text"
                    className="form-control mb-5"
                    name="name"
                    id="bPlace"
                    placeholder="Please Enter your Birth Place"
                  />
                </div>
              </div>
              <div className="col-6">
                <div>
                  <label htmlFor="mobile" className="form-group mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    className="form-control mb-5"
                    name="name"
                    id="mobile"
                    placeholder="Please Enter your Mobile Number"
                  />
                </div>
              </div>
            </div>
            <div className={style.formField}>
              <div>
                <label htmlFor="qualification" className="form-group mb-2">
                  Qualifications
                </label>
                <input
                  type="text"
                  className="form-control mb-5"
                  name="name"
                  id="qualification"
                  placeholder="Please Enter your Qualifications"
                />
              </div>
            </div>
            <div className={style.formField}>
              <div>
                <label htmlFor="address" className="form-group mb-2">
                  Current Address
                </label>
                <input
                  type="text"
                  className="form-control mb-5"
                  name="name"
                  id="address"
                  placeholder="Please Enter your current Address"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <div>
                  <label htmlFor="state" className="form-group mb-2">
                    State
                  </label>
                  <select className="form-control mb-5" name="name" id="state">
                    <option value="Select State">Select State</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="col-4">
                <div>
                  <label htmlFor="district" className="form-group mb-2">
                    District
                  </label>
                  <select
                    className="form-control mb-5"
                    name="name"
                    id="district"
                  >
                    <option value="Select District">Select District</option>
                    <option value="Arwal">Arwal</option>
                    <option value="Bareilly">Bareilly</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="col-4">
                <div>
                  <label htmlFor="aadhar Number" className="form-group mb-2">
                    Aadhar Number
                  </label>
                  <input
                    type="text"
                    className="form-control mb-5"
                    name="name"
                    id="aadhar Number"
                    placeholder="Please Enter Your Aadhar Number"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div>
                  <label htmlFor="AadharCardFront" className="form-group mb-2">
                    Upload Aadhar Card Front-Side
                  </label>
                  <input
                    type="file"
                    className="form-control mb-5"
                    name="name"
                    id="AadharCardBack"
                  />
                </div>
              </div>
              <div className="col-6">
                <div>
                  <label htmlFor="AadharCardBack" className="form-group mb-2">
                    Upload Aadhar Card Back-Side
                  </label>
                  <input
                    type="file"
                    className="form-control mb-5"
                    name="name"
                    id="AadharCardBack"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffFormPreview;
