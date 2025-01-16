import React, { useState } from "react";
// import axios from "axios";

function LoginPage() {
  const [credentials, setCreds] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCreds({
      ...credentials,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleClickLogin = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setLoginError(null);

    // Email and password validation
    if (!credentials.email || !credentials.password) {
      setLoginError("Both fields are required.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post("YOUR_API_ENDPOINT", credentials);
      console.log("Login Successful:", response.data);
      // Redirect to dashboard or home page
    } catch (error) {
      console.error("Login Error:", error);
      if (error.response && error.response.status === 401) {
        setLoginError("Incorrect email or password. Please try again.");
      } else {
        setLoginError("Something went wrong. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300 px-6 py-12">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-2xl transition-transform hover:scale-105">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text mb-2">
            Sign In
          </h2>
          <p className="text-sm text-gray-600">Access your account to start shopping</p>
        </div>
        <form className="space-y-6" onSubmit={handleClickLogin}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              value={credentials.email}
              onChange={handleChange}
              placeholder="Enter your email"
              aria-label="Email Address"
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                autoComplete="password"
                required
                value={credentials.password}
                onChange={handleChange}
                placeholder="Enter your password"
                aria-label="Password"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-blue-500 focus:outline-none"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="text-right mt-2">
              <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                Forgot your password?
              </a>
            </div>
          </div>
          {loginError && (
            <div className="text-red-600 text-sm text-center border border-red-500 bg-red-100 p-2 rounded">
              {loginError}
            </div>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 transition-all duration-200 ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500 transform hover:scale-105"} text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <a href="#" className="text-blue-600 hover:text-blue-500 font-semibold">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
