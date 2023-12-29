import React from 'react'
// import axios from "../axios/axios-create";
// import PropTypes from "prop-types";
// import { useParams } from "react-router-dom";
// import { createBrowserHistory } from "history";



// axios.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// const LoginForm = () => {
//   const history = createBrowserHistory();
//   const { userEmail } = useParams();
//   const [email, setYourEmail] = useState(userEmail);
//   const [password, setYourPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const [googleReg, setGoogleReg] = useState(false);
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
//           navigate('/medication');
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

//   useEffect(() => {
//     setGoogleReg(false);
//   }, [email, password]);

function Signup() {
  return (
  
        <div>

<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>
  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="login-email" name="email" type="text" value={email} onChange={(e) => setYourEmail(e.target.value)} autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

          
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>
    <p className="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
    </p>
  </div>
</div>

        </div>
    )
}


export default Signup