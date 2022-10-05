import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import Spinner from "../../components/Spinner";
import { getUsers, reset } from "../../features/users/userSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.auth);
  const { users, isLoading, isError, message } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }

    dispatch(getUsers());

    // return () => {
    //   dispatch(reset());
    // };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return <div>Dashboard</div>;
};

export default Dashboard;
