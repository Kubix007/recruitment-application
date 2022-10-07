import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import Spinner from "../../components/Spinner";
import { getUsers } from "../../features/users/userSlice";
import Table from "../../components/Table/Table";
import { DashboardProps } from "./types";

const Dashboard: React.FC<DashboardProps> = ({ setIsOpen }) => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.auth);
  const { users, isLoading } = useSelector((state: RootState) => state.users);
  const { pagination } = useSelector((state: RootState) => state.pagination);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    dispatch(getUsers(pagination));
  }, [user, navigate, dispatch, pagination]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <Table data={users.data} totalUsers={users.total} setIsOpen={setIsOpen} />
    </>
  );
};

export default Dashboard;
