import { Link } from "react-router-dom";
function Error404() {
    return (
        <>
            <h1>Opps, you are not supposed to be here</h1>
            <button className="bg-st_blue p-5 rounded-lg text-white">
                <Link to="/">Go back home</Link>
            </button>
        </>
    );
}

export default Error404;