import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Post = () => {


  const[postData,setPostdata] = useState([]);

const postDataDetails = (id) => {
  axios.get(`https://photoslibrary.googleapis.com/v1/albums${id}`)
  .then( (res) => {
    console.log(res.data.albums)
    setPostdata(res.data.albums)
  })
}

useEffect( () =>{
    postDataDetails();
},[])




  const[searchValue,setSearchValue]=useState("");
  
  const onSearch = (event) => {
    setSearchValue(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
  }


  return (
    <div>
      <div>
        <input type="text" placeholder="Search" value={searchValue} onChange={onSearch}/>
        &nbsp;
        <button onClick={onSubmit}>Submit</button>
      </div>
      {/* <div>
         {postData.map( (data) => {
          return(
            <div>
              <div>{data.quote}</div>
              <div>{data.author}</div>
            </div>
          )
         })}
      </div> */}
    </div>
  )
}

export default Post
