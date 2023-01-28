import React from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import axios from "axios";

interface FormI {
  email: string;
  password: string;
}

const SignInForm = () => {
  const { register, handleSubmit } = useForm<FormI>();

  const login = async (data: any) => {
    const response = await axios.post("http://localhost:8080/auth", data);

    if (response.data !== "error") console.log("authenticated");
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