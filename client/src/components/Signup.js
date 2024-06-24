// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { signup } from '../actions/auth';

// const Signup = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(signup(formData));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={formData.password}
//         onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//       />
//       <button type="submit">Signup</button>
//     </form>
//   );
// };

// export default Signup;
