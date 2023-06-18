import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [dataHandle, setDataHandle] = useState([]);
  const usersSearchDataDetails = (id) => {
    axios.get(`https://dummyjson.com/users ${id}`).then((res) => {
      console.log(res.data.users);
      setDataHandle(res.data.users);
    });
  };

  useEffect(() => {
    usersSearchDataDetails("");
  }, []);

  const [usersSearchData, setUsersSearchData] = useState("");

  const searchHandler = (event) => {
    setUsersSearchData(event.target.value);
  };

  const [filterData, setFilterData] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();
    let outputArray = [];
    dataHandle.forEach((data) => {
      if (data.id + "" === usersSearchData) {
        outputArray.push(data);
      }
    });
    setFilterData(outputArray);
  };

  return (
    <div>
      <div>
        <input type="text" value={usersSearchData} onChange={searchHandler} />
        &nbsp;
        <button onClick={submitHandler}>Search</button>
      </div>
      <div>
        {filterData.length > 0 ? (
          <div>
            {filterData.map((newData, id) => (
              <div key={id}>
                <div>firstName:{newData.firstName}</div>
                <div>lastName:{newData.lastName}</div>
                <div>maidenName:{newData.maidenName}</div>
                <div>Age:{newData.age}</div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {dataHandle.map((newData, id) => (
              <div key={id}>
                <div>firstName:{newData.firstName}</div>
                <div>lastName:{newData.lastName}</div>
                <div>maidenName:{newData.maidenName}</div>
                <div>Age:{newData.age}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
