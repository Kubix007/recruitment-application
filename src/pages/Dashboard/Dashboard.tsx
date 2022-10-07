import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import Spinner from "../../components/Spinner";
import { getUsers } from "../../features/users/userSlice";
import Table from "../../components/Table/Table";
import { DashboardProps } from "./types";
import { IPageSettings } from "../../shared/types";

const pageSettings: IPageSettings = {
  page: 1,
  perPage: 1,
};

const Dashboard: React.FC<DashboardProps> = ({ setIsOpen }) => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.auth);
  const { users, isLoading } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    dispatch(getUsers(pageSettings));
  }, [user, navigate, dispatch]);

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
