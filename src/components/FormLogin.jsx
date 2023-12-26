import { useState } from "react";
const FormLogin = ({ onSubmitUserName, onSubmitPassword}) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUserName(userName)
    onSubmitPassword(password)
  };
  const handleChangeUserName = (event) => {
    setUserName(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <input
          type="text"
          id="username"
          placeholder="Username..."
          autoFocus={true}
          className="mb-5 w-64 m-auto h-10 border-red-500 rounded-lg  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset p-2"
          onChange={handleChangeUserName}
          value={userName}
        />
        <input
          type="password"
          id="password"
          placeholder="Password..."
          className="m-auto w-64 mb-5 h-10 border-red-500 rounded-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset p-2"
          onChange={handleChangePassword}
          value={password}
        />
        <div className="flex flex-row m-auto">
          <input type="checkbox" name="check" id="remember_me" />
          <label
            htmlFor="remember_me"
            className="pl-3 pr-10 text-sm font-medium"
          >
            Remember me
          </label>
          <p className="text-sm ml-10 font-medium text-violet-800">
            Forgot your password?
          </p>
        </div>
        <div>
          <button
            type="submit"
            className="rounded-full w-64 h-12 bg-emerald-400 mt-7 mb-7 hover:bg-emerald-500"
            // onClick={() => console.log(userName)}
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
};
export default FormLogin;
