import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
const navigate = useNavigate();

  const initialFormData = Object.freeze({
    email: "",
    password: ""
  });
 
  const [formData, updateFormData] = useState(initialFormData);

  const [emailError, setEmailError] = useState("");
  const [passError, setpassError] = useState("");



const handleChange = (e) => {
  updateFormData({
    ...formData,

    // Trimming any whitespace
    [e.target.name]: e.target.value.trim()
  });
 

};

  const handleSubmit = async (e) => {
    e.preventDefault();

  const email= (formData.email);
  const password=(formData.password);

    const res= await fetch("http://localhost:4000/login",{
      method:'POST',
      body:JSON.stringify({
        email,password
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    const data=await res.json();
    console.log(data);
    if(data.errors){
      setEmailError(data.errors.email)
      setpassError(data.errors.password)
    }
    if(data.user){
      navigate('/')
    }
  }


  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        className="absolute inset-0 bg-gradient-to-r from-dark-300 to-dark-600 shadow-lg transhtmlForm -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
      </div>
      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div className="max-w-md mx-auto">
          <div>
            <h1 className="text-2xl font-semibold">Shepherd Care Login</h1>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div className="relative">
                <input onChange={handleChange} autoComplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                <p className='text-sm text-red-500'>{emailError}</p>
              </div>
              <div className="relative">
                <input onChange={handleChange} autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                <p className='text-sm text-red-500'>{passError}</p>
              </div>
              <div className="relative">
                <button onClick={handleSubmit} className="bg-dark-500 text-white rounded-md px-2 py-1">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;
