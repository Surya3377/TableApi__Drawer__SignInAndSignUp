import React, { useEffect, useState } from "react";
import axios from "axios";

const Post = () => {
  const [postData, setPOstData] = useState([]);

  const data = {
    // your data object to be sent in the post request
  };

  const postDataDetails = () => {
    axios.post("http://localhost:3001/products", data).then((response) => {
      setPOstData(response.data);
    });
  };
  useEffect(() => {
    postDataDetails("");
  }, []);

  return (
    <div>
      {postData.map((data) => {
        return (
          <div>
            <div>{data.name}</div>
            <div>{data.price}</div>
            <div>{data.qty}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
