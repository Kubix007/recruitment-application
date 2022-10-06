import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import Spinner from "../../components/Spinner";
import { getUsers, reset } from "../../features/users/userSlice";
import Table from "../../components/Table/Table";
import { DashboardProps } from "./types";
import { toast } from "react-toastify";

const Dashboard: React.FC<DashboardProps> = ({ setIsOpen }) => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.auth);
  const { users, isLoading } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    dispatch(getUsers());
  }, [user, navigate, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <Table data={users} setIsOpen={setIsOpen} />
    </>
  );
};

export default Dashboard;
