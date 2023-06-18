import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Comments = () => {

  const reducerData = useSelector(store => store.name)


  const [commentsData, setcommentsData] = useState([]);

  const userDataDetails = () => {
    axios.get(`https://dummyjson.com/comments`).then((res) => {
      console.log(res);
      setcommentsData(res.data.comments);
    });
  };

  useEffect(() => {
    userDataDetails("");
  }, []);

  return (
    <div>
      {reducerData}
      {commentsData.map((data,id) => {
        return(
            <div key={id}>
                 <div>{data.body}</div>
                 <div>{data.postId}</div>
            </div>
        )
      })}
    </div>
  );
};

export default Comments;
