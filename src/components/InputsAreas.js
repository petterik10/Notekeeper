import React, { useState } from "react";
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';


function InputsAreas(props) {

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let today = new Date();
    let time = (today.getHours() < 10 ? "0" : "") + today.getHours() + ":" + (today.getMinutes() < 10 ? "0" : "") + today.getMinutes()
    let date = (monthNames[today.getMonth()]) + '-' + today.getDate() + "-" + today.getFullYear();
    let dateTime = date + " " + time;

    const [note, setNote] = useState({
        title: "",
        content: "",
        currentTime: ""
    });
    const [expand, setExpand] = useState(false)

    const handleText = (event) => {
        const { name, value } = event.target;
        setNote(prevText => {
            return {
                ...prevText,
                [name]: value,
                currentTime: dateTime
            }
        });
    }

    const handleSubmit = (event) => {
        props.onSubmit(note);
        event.preventDefault();
        setExpand(false);
        setNote({
            title: "",
            content: "",

        });
    }
    const clickNote = () => {
        setExpand(true);
    }


    return (
        <div>
            <form style={{ backgroundColor: expand ? "rgba(34, 49, 63, 1)" : "white" }}>
                {expand ?
                    <input onChange={handleText}
                        name="title" value={note.title}
                        placeholder="Title"
                    /> : null
                }

                <textarea

                    onClick={clickNote}
                    onChange={handleText}
                    name="content"
                    value={note.content}
                    placeholder="Take a note..."
                    rows={expand ? 3 : 1}

                />
                <button onClick={handleSubmit}><AddCircleRoundedIcon /> </button>
            </form>
        </div>
    );
}

export default InputsAreas;