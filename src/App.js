import React from "react";
// import Material from "./Components/MaterialUi/Material";
import Templete from "./Templete/Templete";
import Dropdown from "./Dropdowns/Dropdown";

const App = () => {
  return (
    <div>
      {/* <Material /> */}
      <Templete />
      {/* <Dropdown /> */}
    </div>
  );
};

export default App;

// import "./App.css";
// import Cart from "./Components/Filter";
// import Delete from "./Components/Delete";
// import Header from "./Components/Header/Header";
// import Post from "./Components/Post";
// import Users from "./Components/Users";
// import Todo from "./Components/Todo";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Comments from "./Components/Comments";
// import Quotes from "./Components/Quotes";
// import Material from "./Components/MaterialUi/Material";
// import Spinner from "./Components/Spinner/Spinner";
// import { useEffect, useState } from "react";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import reducer from "./store/reducer";
// import Search from "./Components/Search";

// const store = createStore(reducer);

// const App = () => {

// const[isLoading,setIsLOading] = useState(false);

// useEffect( () => {
//   setIsLOading(true);
//   setIsLOading(false)
// },[])

// return (
// <Provider store = {store}>
// <BrowserRouter>
//   <Header />
//   <Material />
//   <Routes>
//     <Route path="/Cart" element={<Cart />} />
//     <Route path="/Delete" element={<Delete />} />
//     <Route path="/Post" element={<Post />} />
//     <Route path="/Users" element={<Users />} />
//     <Route path="/Comments" element={<Comments />} />
//     <Route path="/Todo" element={<Todo />} />
//     <Route path="/Quotes" element={<Quotes />} />
//     <Route path = "/Search" element= {<Search/>} />
//   </Routes>
//   {isLoading ? <p>Application Loaded Successfully</p> : <Spinner />}
// </BrowserRouter>
// </Provider>
//     <div>

//     </div>

//   );
// }

// export default App;
