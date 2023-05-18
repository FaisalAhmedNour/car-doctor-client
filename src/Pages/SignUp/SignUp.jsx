import { Link, useNavigate } from "react-router-dom";
import img from '../../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {

    const navigate = useNavigate();

    const { SignUpWithEmailPassword, setLoading } = useContext(AuthContext);
    // console.log(SignUpWithEmailPassword)

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(name, email, password, confirmPassword)
        if (password !== confirmPassword) {
            alert("Password didn't match");
            return;
        }
        
        SignUpWithEmailPassword(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            setLoading(false)
            navigate('/login')
        })
        .catch(error => {
                console.log(error);
            })
            form.reset()
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col gap-20 lg:flex-row">
                <img src={img} className='w-2/5' alt="" />
                <div className="card flex-1 shadow-2xl p-5 border">
                    <div className="card-body">
                        <h1 className='font-semibold text-4xl text-center mb-10'>Sign Up</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input type="name" name='name' placeholder="Your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Your email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Set password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Confirm Password</span>
                                </label>
                                <input type="password" name='confirmPassword' placeholder="Confirm password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                    <p className='text-center'>
                        <span className='text-[#737373]'>Already have an account?</span>
                        <Link to='/Login' className='text-[#FF3811] font-semibold'> Log in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;