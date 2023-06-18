import React from "react";

const DeleteBtn = ({todoData, deleteHandler}) => {
  return (
    <div>
      {todoData.map((todos, index) => {
        return (
          <div>
            {todoData}
            <button onClick={ () => deleteHandler(index)}>DELETE</button>
          </div>
        );
      })}
    </div>
  );
};
export default DeleteBtn;
