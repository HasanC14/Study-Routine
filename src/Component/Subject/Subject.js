import React from "react";
import "./Subject.css";

const Subject = (props) => {
  const subjects = props.subjects;
  const { Add } = props;
  const { subject, description, time, img } = subjects;
  return (
    <div class="card">
      <img src={img} class="card-img-top" alt="Subject_Image" />
      <div class="card-body">
        <h3 class="card-title">{subject}</h3>
        <p class="card-text">{description}</p>
        <h5>Time: {time} Hour</h5>
        <button class="btn" onClick={() => Add(subjects)}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Subject;
