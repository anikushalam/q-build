import "bootstrap/dist/css/bootstrap.min.css";
import style from "./StudentAProfileView.module.css";
import BasicTabs from "./Tab";

const StudentAProfileView = () => {
  return (
    <>
      <div className={style.parentProfile}>
        <h6>Insitute Request</h6>
        <div className={`mt-4 ${style.parentProfileChild}`}>
          <h5>sandeep_ploytec@1</h5>
          <p>Sandip Institute Of Polytechnic SIP, Nashik</p>
        </div>

        <div className={style.address}>
          <h6>About</h6>
          <p>
            Well known engeneering college in nashik for various streams for
            execellence in markets. Staff recongnise by reputed organisations.
            Come along to excel in any field of your choise
          </p>
        </div>

        <div className={style.address}>
          <h6>Address</h6>
          <p>Wall street colony, Amritsar, Panjab</p>
        </div>

        <div className={style.pinstatedis}>
          <div className={style.address}>
            <h6>Pin Code</h6>
            <p>785601</p>
          </div>

          <div className={style.address}>
            <h6>District</h6>
            <p>Nashik</p>
          </div>

          <div className={style.address}>
            <h6>State</h6>
            <p>Maharastra</p>
          </div>
        </div>

        <div className={style.typemode}>
          <div className={style.address}>
            <h6>Insititue Type</h6>
            <p>Polytechnic</p>
          </div>

          <div className={style.address}>
            <h6>Insititue Mode</h6>
            <p>Offline</p>
          </div>

          {/* --------------This feild will be empty-------------------------------- */}

          <div className={`${style.address} ${style.none}`}>
            <h6> bedbfg</h6>
            <p>Offlfghtyjhine</p>
          </div>
        </div>

        <div className={style.typemode}>
          <div className={style.address}>
            <h6>Mobile Number</h6>
            <p>9875462612</p>
          </div>

          <div className={style.address}>
            <h6>Email ID</h6>
            <p>sandeepdoundation@gmail.com</p>
          </div>

          {/* --------------This feild will be empty-------------------------------- */}

          <div className={`${style.address} ${style.none}`}>
            <h6> bedbfg</h6>
            <p>Offlfghtyjhine</p>
          </div>
        </div>

        <div className={style.aadhar}>
          <div className={style.address}>
            <h6>Mobile Number</h6>
            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
        </div>

        <div className={style.btns}>
          <div className={style.btn}>Accept</div>
          <div className={style.btn}>Reject</div>
        </div>
        {/* <div className="mt-3">
          <BasicTabs />
        </div> */}
      </div>
    </>
  );
};

export default StudentAProfileView;
