import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { loginUser } from '@/redux/features/users/usersSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface LoginFormInputs {
  email: string;
  password: string;
}

export function LoginForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const { user, isLoading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onSubmit = (data: LoginFormInputs) => {
    console.log('data', data);

    dispatch(loginUser({ email: data.email, password: data.password }));
  };

  useEffect(() => {
    if (user.email && !isLoading) {
      navigate('/');
    }
  }, [user.email, isLoading]);

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
                  id="email"
                  placeholder="Email Address"
                  type="email"
                  className="mt-0 form-input"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  {...register('email', { required: 'Email is required' })}
                />
              </label>
              {errors.email && <p>{errors.email.message}</p>}
              <label className="flex">
                <span className="sr-only">Password</span>
                <Input
                  id="password"
                  placeholder="Password"
                  type="password"
                  className="mt-0 form-input"
                  autoCapitalize="none"
                  autoComplete="password"
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
              <Button className="w-full py-2 btn btn-icon btn-google">
                <FcGoogle className="mr-1" />
                Continue with Google
              </Button>
            </div>
          </form>
          <p className="text-xs text-center text-gray-600">
            <span>Don't Have Account?</span>{' '}
            <Link className="text-red-900 text-xl underline" to={'/signup'}>
              Create Account
            </Link>
            <br />
            By signing up you agree to our
            <a href="#" className="text-primary">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
