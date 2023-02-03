import axios from "axios";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import { RootState } from "../redux/store";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const { jwt } = useSelector((state: RootState) => state.auth);
  const registerUser = async (data: any) => {
    console.log(data);
    const { passwordConfirm, ...rest } = data;
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/user`,
      rest,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    console.log("resp:", response);
  };
  return (
    <form onSubmit={handleSubmit(registerUser)}>
      <div className="flex flex-col items-center h-screen justify-center">
        <p className="font-bold text-xl mb-2">Register</p>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          {...register("name")}
          className="border border-black"
        />

        <label htmlFor="">Last name:</label>
        <input
          type="text"
          {...register("lastName")}
          className="border border-black"
        />
        <label htmlFor="">Email:</label>
        <input
          type="text"
          {...register("email")}
          className="border border-black"
        />
        <label htmlFor="">Password:</label>
        <input
          type="password"
          {...register("password")}
          className="border border-black"
        />
        <label htmlFor="">Confirm password:</label>
        <input
          type="password"
          {...register("passwordConfirm")}
          className="border border-black"
        />
        <Button type="submit" action={() => {}} title="Register" />
      </div>
    </form>
  );
};

export default Register;
