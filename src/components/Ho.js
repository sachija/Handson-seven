import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <div>
            <p className="Title">
                <Link id="head1" to ="/">Home</Link> |
                <Link id="head1" to ="/CRUD">Students Details</Link>|
                <Link id="head1" to ="/Cont">ContactUs</Link>
            </p>
            <p id="heading">Home page</p>
        </div>
    )
}

export default Home;