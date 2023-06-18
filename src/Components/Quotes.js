import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const QuotesData = () => {

const reducerData = useSelector(store => store.name)

  const [quotesData, setquotesData] = useState([]);

  const userDataDetails = () => {
    axios.get(`https://dummyjson.com/quotes`).then((res) => {
      console.log(res);
      setquotesData(res.data.quotes);
    });
  };

  useEffect(() => {
    userDataDetails("");
  }, []);

  return (
    <div>
      {reducerData}
      {quotesData.map((data,id) => {
        return(
            <div key={id}>
                 <div>{data.quote}</div>
                 <div>{data.author}</div>
            </div>
        )
      })}
    </div>
  );
};

export default  QuotesData;
