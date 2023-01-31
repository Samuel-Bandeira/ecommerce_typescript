import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../redux/store";

const Root = () => {
  const { jwtToken } = useSelector((state: RootState) => state.user);

  return <div>{jwtToken !== "" ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default Root;
