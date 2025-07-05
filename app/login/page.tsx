"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthProvider";

const LoginPage = () => {
  const { token, login } = useContext(AuthContext)!;
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (token) router.push("/dashboard");
  }, [token, router]);

  useGSAP(() => {
    gsap.fromTo(
      ".login-form",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
    );
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    login(username, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="login-form w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Restart Admin Dashboard
            </h1>
            <p className="mt-4 text-gray-600">Sign in to your account!</p>
          </div>

          <form className="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="sr-only" htmlFor="username">
                Username
              </label>
              <div className="relative">
                <input
                  placeholder="Enter your username"
                  className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  name="username"
                  id="username"
                  type="text"
                  required
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  placeholder="Enter your password"
                  className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  required
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4" onClick={togglePasswordVisibility}>
                  <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>

            <button
              className="inline-block rounded-lg cursor-pointer bg-purple-600 px-5 py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 w-full focus:ring-blue-500 focus:ring-opacity-50"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
