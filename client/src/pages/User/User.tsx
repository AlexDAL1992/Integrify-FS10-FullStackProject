import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";

import { getAllUsers, deleteAUser } from "../../redux/reducers/user-list";
import Can from "../../components/Can";
import "./user.scss";

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const role = useSelector((state: any) => state.user.user.role);
  const userList = useSelector((state: any) => state.userList);

  useEffect(() => {
    dispatch(getAllUsers() as any);
  }, [dispatch, userList]);

  return (
    <div className="userlist-page background text">
      <Can
        role={role}
        perform="user:findAll"
        yes={() => (
          <div>
            <h3 className="userlist-page__title">USER LIST</h3>
            {userList && (
              <ul className="userlist-page__list">
                {userList.map((user: any) => (
                  <li key={user.id} className="userlist-page__line">
                    <h4>First name: {user.firstname}</h4>
                    <h4>Last name: {user.lastname}</h4>
                    <h4>Email: {user.email}</h4>
                    <h4>Role: {user.role}</h4>
                    <Button
                      variant="outlined"
                      color="inherit"
                      onClick={() => dispatch(deleteAUser(user.id) as any)}
                    >
                      DELETE THIS USER
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        no={() => (
          <div>
            <h4>YOU ARE NOT AUTHORIZED!</h4>
          </div>
        )}
      />

      <Button
        variant="outlined"
        color="inherit"
        onClick={() => {
          navigate("/");
        }}
      >
        BACK TO HOME
      </Button>
    </div>
  );
};

export default User;
