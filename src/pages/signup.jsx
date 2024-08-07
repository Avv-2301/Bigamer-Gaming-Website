import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import SocialMedia from "../component/section/socialmedia";

const title = "Register Now";

const SignUp = () => {
    const [regFName, setRegFName] = useState('');
    const [regLName, setRegLName] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [regConPassword, setRegConPassword] = useState('');

    return (
        <Fragment>
            <Header />
            <PageHeader title={'REGISTRATION PAGE'} curPage={'Sign Up'} />
            <div className="login-section padding-top padding-bottom">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">{title}</h3>
                        <form className="account-form">
                            <div className="form-group">
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    id="item01"
                                    value={regFName}
                                    onChange={(e) => setRegFName(e.target.value)}
                                    placeholder="First Name *"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    id="item02"
                                    value={regLName}
                                    onChange={(e) => setRegLName(e.target.value)}
                                    placeholder="Last Name *"
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    required
                                    type="text"
                                    name="email"
                                    id="item03"
                                    value={regEmail}
                                    onChange={(e) => setRegEmail(e.target.value)}
                                    placeholder="Your email *" 
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    required
                                    type="password"
                                    name="password"
                                    id="item04"
                                    value={regPassword}
                                    onChange={(e) => setRegPassword(e.target.value)}
                                    placeholder="Password *"
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    required
                                    type="password"
                                    name="conpassword"
                                    id="item05"
                                    value={regConPassword}
                                    onChange={(e) => setRegConPassword(e.target.value)}
                                    placeholder="Confirm Password *"
                                />
                            </div>
                            <div className="form-group">
                                <button className="d-block default-button"><span>Get Started Now</span></button>
                            </div>
                        </form>
                        {/* <div className="account-bottom">
                            <span className="d-block cate pt-10">Are you a member? <Link to="/login">Login</Link></span>
                            <span className="or"><span>or</span></span>
                            <h5 className="subtitle">Register With Social Media</h5>
                            <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center mt-4">
                                <SocialMedia />
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default SignUp;
