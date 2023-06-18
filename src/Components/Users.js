import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Users = () => {

  const reducerData = useSelector(store => store.name)


  const [usersData, setUsersData] = useState([]);

  const userDataDetails = () => {
    axios.get(`https://dummyjson.com/users`).then((res) => {
      console.log(res);
      setUsersData(res.data.users);
    });
  };

  useEffect(() => {
    userDataDetails("");
  }, []);

  return (
    <div>
      {reducerData}
      {usersData.map((data,id) => {
        return(
          <div key={id}>
              <div>{data.id}</div>
              <div>{data.firstName}</div>
              <div>{data.lastName}</div>
        </div>
        )
      })}
       
      </div>
          
  );
};

export default Users;
