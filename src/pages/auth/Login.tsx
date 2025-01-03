import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { Heart, Mail, Lock } from 'lucide-react';
import { login } from '../../store/slices/authSlice';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    // Check credentials
    if ((email === 'geetbisoi@gmail.com' && password === '1234') ||
        (email === 'donor@example.com' && password === 'password123') ||
        (email === 'admin' && password === 'admin')) {
      dispatch(login({ email, password }));
      navigate('/rewards');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">

          
          <Heart className="mx-auto h-12 w-12 text-red-500" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-600">
            Demo Credentials:
            <br />
            Email: geetbisoi@gmail.com
            <br />
            Password: 1234
            <br />
            <br />
            Admin Credentials:
            <br />
            Username: admin
            <br />
            Password: admin
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          
          <div className="rounded-md shadow-sm space-y-4">
            <div>
            
              <label htmlFor="email" className="sr-only">
                Email address or Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full pl-10 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500"
                  placeholder="Email address or Username"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-md relative block w-full pl-10 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500"
                  placeholder="Password"
                />
                
                
              </div>
            </div>

            <p className="mt-2 text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/register" className="font-medium text-red-500 hover:text-red-400">
                          Sign in
                        </Link>
                      </p>
          </div>

          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Sign in
          </button>
            <br></br>
          <Link to="/register">
          {/* <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Sign Up
          </button> */}
          </Link>
        </form>
      </div>
    </div>
  );
};