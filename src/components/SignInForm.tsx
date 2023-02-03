import React from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/user";
import { authActions } from "../redux/auth";
interface FormI {
  email: string;
  password: string;
}

interface MockResponseI {
  data:
    | {
        id: number;
        email: string;
        name: string;
        jwtToken: string;
      }
    | "error";
}

const SignInForm = () => {
  const { register, handleSubmit } = useForm<FormI>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = async (data: any) => {
    try {
      const auth = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth`,
        data
      );

      const token = auth.data.access_token;
      const id = auth.data.id;

      const getUserResponse = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(authActions.setToken(`${token}`));
      dispatch(userActions.set(getUserResponse.data));

      navigate("/");
    } catch (e) {
      console.log("Login error");
      // window.location.reload();
    }

    // if (response.data !== "error") {
    //   dispatch(
    //     userActions.set({
    //       user: {
    //         id: response.data.id,
    //         email: response.data.email,
    //         name: response.data.name,
    //       },
    //       jwtToken: response.data.jwtToken,
    //     })
    //   );
    //   navigate("/");
    // }
  };

  return (
    <div className="border p-10 w-[400px]">
      <p className="text-xl font-bold">Sign in</p>
      <form className="flex flex-col" onSubmit={handleSubmit(login)}>
        <label htmlFor="email" className="font-bold">
          E-mail
        </label>
        <input
          type="text"
          className="border border-black"
          {...register("email")}
        />

        <label htmlFor="password" className="font-bold">
          Password
        </label>
        <input
          type="password"
          className="border border-black"
          {...register("password")}
        />

        <Button action={() => {}} title="Sign in" type="submit" />
        <div className="flex space-x-2">
          <input type="checkbox" className="border border-black" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            quidem eos delectus.
          </p>
        </div>
        <Button
          action={() => {}}
          title="Create your Amazon Account"
          type="submit"
        ></Button>
      </form>
    </div>
  );
};

export default SignInForm;
