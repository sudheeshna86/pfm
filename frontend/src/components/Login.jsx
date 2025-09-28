import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext.jsx";
import axios from "axios"//
import { Link,useNavigate } from "react-router-dom";
import {login} from "../contexts/AuthContext.jsx";

export function Login({ onLogin }) {
  const { theme } = useTheme();
  const [form, setForm] = useState({ email: "", password: "", role: "user" });
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    
  };
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const res=await axios.post("http://localhost:5000/Auth/login",form) 
        console.log(res)
        if(res.data.message=="Login successfully"){
           login(res.data.user)
           if(res.data.user.role=="user"){
                navigate('/dashboard')
           }
           else{
            navigate('/admin')
           }
        }
      }
      catch(err){
        console.log(err)
      }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
              Role
            </label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

