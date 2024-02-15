import { Link } from 'react-router-dom';
import Logo from "../../assets/reshot-icon-heart-coffee-M34YRS6ZHW.svg";
import background from "../../assets/background.avif"
export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-600 overflow-x-hidden ">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        
        <div className="text-center">
          <img
            className="mx-auto h-16 w-auto mb-6"
            src={Logo}
            alt="Your Company"
          />
          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Login
          </h2>
        </div>

        <form className="mt-8 space-y-6" action="#" method="POST">
       
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#e73f69] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login   
              </button>
            </div>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-indigo-500 hover:text-indigo-600">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
