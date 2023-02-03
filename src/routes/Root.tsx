import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../redux/store";

const Root = () => {
  const { jwt } = useSelector((state: RootState) => state.auth);

  return <div>{jwt ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default Root;
