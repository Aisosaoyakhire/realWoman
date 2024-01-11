// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "../axios/axios-create";
// import PropTypes from "prop-types";
// import { useParams } from "react-router-dom";
// import { createBrowserHistory } from "history";

// // Axios interceptor to add Authorization header
// axios.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// const Login= () => {
//   const history = createBrowserHistory();
//   const { userEmail } = useParams();
//   const [email, setYourEmail] = useState(userEmail);
//   const [password, setYourPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

  
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [token, setToken] = useState();

//   // if (!token) {
//   //   return <Signin setToken={setToken} />;
//   // }

//   const handleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const navigate = useNavigate();

//   const handleClick = async (e) => {
//     e.preventDefault();
//     if (!email.trim() || !password.trim()) {
//       setErrorMessage("Please provide both email and password.");
//       return;
//     }

//     const form = {
//       email,
//       password,
//     };

//     setLoading(true);

//     try {
//       const response = await axios.post("/auth/login", JSON.stringify(form), {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       setToken(response.data.tokens.access.token);
//       localStorage.setItem("token", response.data.tokens.access.token);
//       // I negated the response to email verification because of blockage
//       if (response.data.user.isEmailVerified) {
//         setSuccessMessage("Email Verified.");

//         // navigate("/medication");
//       } else {
//         // alert("False");
//         setErrorMessage("Please verify your email first! Redirecting...");
//         setTimeout(() => {
//           // navigate(`/emailverification/${email}`);
//           navigate('/Blogs');
//         }, 1000);
//       }
//       setLoading(false);
//       localStorage.setItem("userId", response.data.user.id);
//       // setSuccessMessage(true);
//       if (response.data.success) {
//         localStorage.setItem("user", JSON.stringify(response.data.user));
//         // navigate("/medication");
//       } else {
//         setErrorMessage(response.data.message);
//       }
//       localStorage.setItem("user", response.data.user);
//       localStorage.setItem("token", response.data.tokens.access.token);
//     } catch (error) {
//       if (!error?.response) {
//         setErrorMessage("Network Error! Try Again.");
//       } else if (error.response?.status === 400) {
//         setErrorMessage("Unauthorized");
//       } else if (error.response?.status === 401) {
//         setErrorMessage("Incorrect Email or Password");
//       } else if (response.data.message.toLowerCase().includes("email")) {
//         setErrorMessage("email", response.data.message);
//       } else if (!token) {
//         setErrorMessage("Please verify your email.");
//       } else {
//         console.error("Error:", error);
//         setErrorMessage("An error occurred. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//       // navigate("/medication");
//       // setTimeout(() => {
//       //   navigate("/medication");
//       // }, 2000);
//       // history.push(`/emailverification/${email}`);
//     }
//   };

//   useEffect(() => {
//     setErrorMessage("");
//   }, [email, password]);

//     return (
//         <div>

// <section class="relative flex flex-wrap lg:h-screen lg:items-center">
//   <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
//     <div class="mx-auto max-w-lg text-center">
//       <h1 class="text-2xl font-bold sm:text-3xl">Get started today!</h1>

//       <p class="mt-4 text-gray-500">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
//         ipsa culpa autem, at itaque nostrum!
//       </p>
//     </div>

//     <form action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
//       <div>
//         <label for="email" class="sr-only">Email</label>

//         <div class="relative">
//           <input
//           id="login-email"
//             type="email"
//             class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
//             placeholder="Enter email"
//             value={email} onChange={(e) => setYourEmail(e.target.value)}
//           />

//           <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               class="h-4 w-4 text-gray-400"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
//               />
//             </svg>
//           </span>
//         </div>
//       </div>

//       <div>
//         <label for="password" class="sr-only">Password</label>

//         <div class="relative">
//           <input
//           type={showPassword ? "text" : "password"}
//             class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
//             value={password}
//             onChange={(e) => setYourPassword(e.target.value)}
            
//           />

          

//           <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               class="h-4 w-4 text-gray-400"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//               />
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//               />
//             </svg>
//           </span>
//         </div>
//       </div>

//       <div class="flex items-center justify-between">
//         <p class="text-sm text-gray-500">
//           No account?
//           <a class="underline" href="http://localhost:3000/SignUp">Sign up</a>
//         </p>

//         <button
//           type="submit"
//           class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
//         >
//           Sign in
//         </button>
//       </div>
//     </form>
//   </div>

//   <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
//     <img
//       alt="Welcome"
//       src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
//       class="absolute inset-0 h-full w-full object-cover"
//     />
//   </div>
// </section>

//         </div>
//     )
// }

// export default Login



import React from 'react'

function Login() {
    return (
        <div>

<section class="relative flex flex-wrap lg:h-screen lg:items-center">
  <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div class="mx-auto max-w-lg text-center">
      <h1 class="text-2xl font-bold sm:text-3xl">Get started today!</h1>

      <p class="mt-4 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
        ipsa culpa autem, at itaque nostrum!
      </p>
    </div>

    <form action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
        <label for="email" class="sr-only">Email</label>

        <div class="relative">
          <input
            type="email"
            class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter email"
          />

          <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label for="password" class="sr-only">Password</label>

        <div class="relative">
          <input
            type="password"
            class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter password"
          />

          <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <p class="text-sm text-gray-500">
          No account?
          <a class="underline" href="http://localhost:3000/SignUp">Sign up</a>
        </p>

        <button
          type="submit"
          class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
          Sign in
        </button>
      </div>
    </form>
  </div>

  <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt="Welcome"
      src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      class="absolute inset-0 h-full w-full object-cover"
    />
  </div>
</section>

        </div>
    )
}

export default Login