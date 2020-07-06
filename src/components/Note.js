import React from "react";
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

function Note(props) {

  const deleteitem = () => {
    props.onDelete(props.id)
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p>{props.time}</p>
      <button onClick={deleteitem}>
        <DeleteRoundedIcon />
      </button>
    </div>
  );
}

export default Note;

