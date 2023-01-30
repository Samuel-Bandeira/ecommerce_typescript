import { Outlet } from "react-router-dom";

const Root = () => {
  const user = {
    isAuth: false,
  };
  return <div>{user.isAuth ? <Outlet /> : <div>NotAuth</div>}</div>;
};

export default Root;
