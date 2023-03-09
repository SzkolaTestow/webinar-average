// @flow
import React from "react";
import { Link, Outlet, useLoaderData, useParams } from "react-router-dom";
import { getUsers } from "../../mockData/getData";
import { User } from "../../types";

type Props = {};
const HomePage = (props: Props) => {
  const { userId } = useParams();
  const { users } = useLoaderData() as { users: User[] };

  const isSelected = (_userId: string) => {
    return _userId === userId;
  };

  return (
    <>
      <div
        id="sidebar"
        className={
          "lg:flex flex-col w-3/12 bg-gray-50 border-r-1 border-solid border-g hidden"
        }
      >
        <h1>School App</h1>
        <nav>
          {users.length ? (
            <ul>
              <li>
                <Link className={!userId ? "bg-gray-300" : ""} to={"/"}>
                  Cała klasa
                </Link>
              </li>
              {users.map((user: User) => (
                <li key={user.uuid}>
                  <Link
                    className={isSelected(user.uuid) ? "bg-gray-300" : ""}
                    to={`profile/${user.uuid}`}
                  >
                    {user.firstName || user.lastName ? (
                      <>
                        {user.firstName} {user.lastName}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div className="flex justify-center w-full min-h-full overflow-auto flex-wrap">
        <Outlet />
      </div>
    </>
  );
};

export const homePageLoader = async () => {
  const users = await getUsers();
  return { users };
};

export default HomePage;
