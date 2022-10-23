import { Link } from "react-router-dom";

const ContactUs = () =>{
    return(
        <div>
            <p className="Title">
                <Link id="head1" to ="/">Home</Link>
                <Link id="head1" to ="/Cont">ContactUs</Link>
                <Link id="head1" to ="/CRUD">Students</Link>
            </p>
            <p id="heading">Contact Us</p>
        </div>
    )
}

export default ContactUs;