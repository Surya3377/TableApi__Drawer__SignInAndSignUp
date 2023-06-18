import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Filter = () => {
  const reducerData = useSelector(store=> store.name)
  console.log(reducerData)

  const [cartData, setCartData] = useState([]);

  const cartDetails = (id) => {
    axios
      .get(`https://dummyjson.com/carts${id}`)
      .then((res) => {
        console.log(res.data.carts);
        setCartData(res.data.carts);
      })
      .catch((err) => console.log(err)); 
  };

  useEffect(() => {
    cartDetails("");
  }, []);

  const [searchValue, setSearchCartValue] = useState("");

  const onSearch = (event) => {
    setSearchCartValue(event.target.value);
  };

  const [filterData, setFilterData] = useState([]);

  const onSubmit = (event) => {
    let outputArray = [];
    console.log("cartData 1");
    console.log(cartData);
    cartData.map((data) => {
      if (data.id + "" == searchValue) {
        outputArray.push(data);
      }
    });

    setFilterData(outputArray);
    // cartDetails(searchValue);
  };

  return (
    
    <div>
      {reducerData}
      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={onSearch}
        />
        &nbsp;
        <button onClick={onSubmit}>Submit</button>
      </div>
      <div>
        {/* <div>{searchValue}</div> */}
        {filterData.length > 0 ? (
          <>
            {filterData.map((data, id) => {
              return (
                <div key={id}>
                  {data.products.map((newData, index) => {
                    return (
                      < >
                        <div>{newData.title}</div>
                        <div>{newData.price}</div>
                        <div>{newData.quantity}</div>
                      </>
                    );
                  })}
                </div>
              );
            })}
          </>
        ) : (
          <>
            {cartData.map((data, id) => {
              return (
                <div key={id}>
                  {data.products.map((newData, index) => {
                    return (
                      <>
                        <div>{newData.title}</div>
                        <div>{newData.price}</div>
                        <div>{newData.quantity}</div>
                      </>
                    );
                  })}
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Filter;
