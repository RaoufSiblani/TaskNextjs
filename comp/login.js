import React, { useState } from 'react';

const MyInfo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !country) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
    setName('');
    setEmail('');
    setCountry('');
    setErrorMessage('');
    setSubmitted(true);
  };

  return (
    <div className="mt-5 mb-5">
      <h1 className="text-center font-sans font-bold text-orange213 text-2xl">Login</h1>
      <hr className="border-t-2 border-orange213" />
      <form className="relative items-center flex flex-col" onSubmit={handleSubmit}>
        <div className="mt-5">
          <label className="text-left ml-5 font-sans font-bold text-orange213 text-lg">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mt-5">
          <label className="text-left ml-5 font-sans font-bold text-orange213 text-lg">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mt-5">
          <label className="text-left ml-5 font-sans font-bold text-orange213 text-lg">Country:</label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select a country</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Japan">Japan</option>
            <option value="KSA">KSA</option>
            <option value="USA">USA</option>
            <option value="Germany">Germany</option>
            <option value="UK">UK</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-5 bg-orange-500 text-black cursor-pointer text-2xl rounded-1g font-semibold px-1 py-2  border-none rounded-3 transform transition-transform duration-300 hover:scale-110"
        >
          Submit
        </button>
      </form>
      <div className="mt-5">
        {errorMessage && <p className="text-red-500 ml-5 mb-2 text-center">{errorMessage}</p>}
        <h2 className="text-left ml-5 font-sans font-bold text-orange213 text-2xl underline">Reviews:</h2>
        {submitted}
      </div>
    </div>
  );
};

export default MyInfo;
