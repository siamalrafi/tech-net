import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createUser, googleSignUp } from '@/redux/features/users/usersSlice';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';

interface SignupFormInputs {
  email: string;
  password: string;
}

export function SignupForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();

  const dispatch = useDispatch();

  const onSubmit = (data: SignupFormInputs) => {
    dispatch(createUser({ email: data.email, password: data.password }));
    navigate('/');
  };

  const handleGoogleSignUp = () => {
    dispatch(googleSignUp());
    setTimeout(() => {
      navigate('/');
    }, 500000);
  };

  return (
    <section className="px-4 py-24 mx-auto max-w-7xl">
      <div className="grid items-center w-full grid-cols-1 gap-0 mx-auto lg:grid-cols-11 lg:gap-24 xl:w-11/12">
        <div className="col-auto text-center md:col-span-7 lg:text-left">
          <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl md:leading-none tracking-none md:tracking-tight">
            Ready to start your journey?
          </h1>
          <p className="mb-10 text-lg font-light text-gray-500 md:text-xl md:tracking-relaxed md:mb-4">
            Low-latency voice and video feels like you’re in the same room. Wave
            hello over video, watch friends stream their games, or gather up and
            have a drawing session with screen share.
          </p>
        </div>
        <div className="col-auto md:col-span-4">
          <form
            className="mb-6 border-0 rounded-lg shadow-xl card"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="justify-center pb-0 text-gray-700 border-0 card-header">
              <p className="pt-2">Start talking now</p>
            </div>
            <div className="px-6 py-4 space-y-4 border-b border-gray-200 card-body">
              <label className="flex">
                <span className="sr-only">Email Address</span>
                <Input
                  className="mt-0 form-input"
                  type="email"
                  placeholder="Email Address"
                  required={true}
                  {...register('email', { required: 'Email is required' })}
                />
              </label>
              {errors.email && <p>{errors.email.message}</p>}
              <label className="flex">
                <span className="sr-only">Password</span>
                <Input
                  className="mt-0 form-input"
                  type="password"
                  placeholder="Password"
                  required={true}
                  {...register('password', {
                    required: 'Password is required',
                  })}
                />
              </label>
              {errors.password && <p>{errors.password.message}</p>}
              <Button className="w-full py-2 btn btn-primary" type="submit">
                Sign up for free
              </Button>
            </div>
            <div className="px-6 py-4 card-body">
              <Button
                onClick={() => handleGoogleSignUp()}
                className="w-full py-2 btn btn-icon btn-google"
              >
                <svg
                  className="mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="transparent"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z" />
                </svg>
                Continue with Google
              </Button>
            </div>
          </form>
          <p className="text-xs text-center text-gray-600">
            <span>I Have Account?</span>{' '}
            <Link className="text-red-900 text-xl underline" to={'/login'}>
              Login
            </Link>
            <br /> By signing up you agree to our{' '}
            <a href="#" className="text-primary">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
