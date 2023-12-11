import "bootstrap/dist/css/bootstrap.min.css";
import style from './StudentAProfileView.module.css'

const TabContent = () =>{
    return (
        <>
            <div className="my-3">
                <p className="text-black"><span>Name</span><br/>
                <span className="text-muted mt-0">Abhishek Singh</span></p>
            </div>
            <div className={style.tabContentParent}>
                <p className="text-black"><span>Name</span><br/>
                <span className="text-muted mt-0">Abhishek Singh</span></p>

                <p className="text-black"><span>Name</span><br/>
                <span className="text-muted mt-0">Abhishek Singh</span></p>

                <p className="text-black"><span>Name</span><br/>
                <span className="text-muted mt-0">Abhishek Singh</span></p>
            </div>

            <div className={style.tabContentParent}>
                <p className="text-black"><span>Name</span><br/>
                <span className="text-muted mt-0">Abhishek Singh</span></p>

                <p className="text-black"><span>Name</span><br/>
                <span className="text-muted mt-0">Abhishek Singh</span></p>

                <p className="text-black"><span>Name</span><br/>
                <span className="text-muted mt-0">Abhishek Singh</span></p>
            </div>

            <div className={style.tabContentParent}>
                <p className="text-black"><span>Name</span><br/>
                <span className="text-muted mt-0">Abhishek Singh</span></p>

                <p className="text-black"><span>Name</span><br/>
                <span className="text-muted mt-0">Abhishek Singh</span></p>

                <p className="text-black"><span>Name</span><br/>
                <span className="text-muted mt-0">Abhishek Singh</span></p>
            </div>

            <div className={style.tabContentParent}>
                <p className="text-black"><span>Name</span><br/>
                <span className="text-muted mt-0">Abhishek Singh</span></p>

                <p className="text-black"><span>Name</span><br/>
                <span className="text-muted mt-0">Abhishek Singh</span></p>

                <p className="text-black"><span>Name</span><br/>
                <span className="text-muted mt-0">Abhishek Singh</span></p>
            </div>

            <div className={style.tabContentParent}>
                <p className="text-black"><span>Address</span><br/>
                <span className="text-muted mt-0">177 A Bleeker Street</span></p>

                <p className="text-black"><span>Aadhar Number</span><br/>
                <span className="text-muted mt-0">123456789012</span></p>
            </div>

            <div className="my-3">
                <p className="text-black"><span>Qualification</span><br/>
                <span className="text-muted mt-0">Msc. Phd.</span></p>
            </div>

            <div className={style.tabContentParent}>
                <p className="text-black"><span>Aadhar Card Front Side</span><br/>
                <span className="text-muted mt-0">image.jpeg</span></p>

                <p className="text-black"><span>Aadhar Card Back Side</span><br/>
                <span className="text-muted mt-0">image.png</span></p>
            </div>
        </>
    )
}

export default TabContent