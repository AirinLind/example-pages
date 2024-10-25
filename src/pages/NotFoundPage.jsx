import NotFoundImg from "../assets/NotFoumdImg.png";

function NotFoundPage(){
    return(
        <div className="content">
            <img width={651} src={NotFoundImg} alt="Not Found" />
        </div>
    )
}

export default NotFoundPage;