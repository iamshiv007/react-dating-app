import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SubmitLoader from "../layout/loading/SubmitLoader";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/actions/userActions";

const Signup = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { loading, isAuthenticated } = useSelector((state) => state.user);

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch(signup({ fullName, gender, userName, password }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      {loading && <SubmitLoader />}
      {/* // component */}
      <section className='min-h-screen flex items-stretch text-white '>
        <div
          className='lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center'
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
          }}
        >
          <div className='absolute bg-black opacity-60 inset-0 z-0'></div>
          <div className='w-full px-24 z-10'>
            <h1 className='text-5xl font-bold text-left tracking-wide'>
              Chat secure
            </h1>
            <p className='text-3xl my-4'>Your chat not stored in database</p>
          </div>
        </div>
        <div
          className='lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0'
          style={{ backgroundColor: "#161616" }}
        >
          <div
            className='absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center'
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
            }}
          >
            <div className='absolute bg-black opacity-60 inset-0 z-0'></div>
          </div>
          <div className='w-full py-6 z-20'>
            <h1 className='text-4xl font-bold'>React dating app</h1>

            <form
              onSubmit={onSubmit}
              action=''
              className='sm:w-2/3 w-full px-4 lg:px-0 mx-auto'
            >
              <div className='pb-2 pt-4'>
                <input
                  onChange={(e) => setFullName(e.target.value)}
                  type='text'
                  name='fullName'
                  id='fullName'
                  placeholder='Full Name'
                  required
                  className='block w-full p-4 text-lg rounded-sm bg-black'
                />
              </div>
              <div className='pb-2 pt-4'>
                <select
                  onChange={(e) => setGender(e.target.value)}
                  type='text'
                  name='gender'
                  id='gender'
                  placeholder='Gender'
                  required
                  className='block w-full p-4 text-lg rounded-sm bg-black'
                >
                  <option value=''>Gender</option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                  <option value='other'>Other</option>
                </select>
              </div>
              <div className='pb-2 pt-4'>
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  type='text'
                  name='userName'
                  id='userName'
                  placeholder='User Name'
                  required
                  className='block w-full p-4 text-lg rounded-sm bg-black'
                />
              </div>
              <div className='pb-2 pt-4'>
                <input
                  autoComplete='new-password'
                  onChange={(e) => setPassword(e.target.value)}
                  className='block w-full p-4 text-lg rounded-sm bg-black'
                  type='password'
                  name='password'
                  id='password'
                  required
                  placeholder='Password'
                />
              </div>
              <div className='my-2 flex justify-between'>
                {/* <a href='#'>Forgot your password?</a> */}
                <p className='text-gray-400'>Already have an account?</p>
                <NavLink
                  className='hover:underline text-blue-50 hover:text-blue-100'
                  to='/login'
                >
                  Login
                </NavLink>
              </div>
              <div className='px-4 pb-2 pt-4'>
                <button className='uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none'>
                  {loading ? "Sending..." : "Register"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
