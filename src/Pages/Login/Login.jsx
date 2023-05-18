import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const { SignInWithEmailPassword, setLoading, setUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation()
    console.log(location);
    const from = location.state?.from.pathname || '/';
    console.log(from)

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        form.reset()

        SignInWithEmailPassword(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            setUser(user)
            setLoading(false)
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col gap-20 lg:flex-row">
                <img src={img} className='w-2/5' alt="" />
                <div className="card flex-1 shadow-2xl p-5 border">
                    <div className="card-body">
                        <h1 className='font-semibold text-4xl text-center mb-10'>Login</h1>
                        <form onSubmit={handleSubmit}>
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
                                <input type="password" name='password' placeholder="Your password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                    <p className='text-center font-semibold text-[#444444]'>Or Sign In with</p>
                    <p className='text-center'>
                        <span className='text-[#737373]'>Didnt have an account?</span>
                        <Link to='/signup' className='text-[#FF3811] font-semibold'> Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;