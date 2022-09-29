import React, { useEffect, useState } from "react";
import profile from "../image/Profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./Time.css";

const Time = (props) => {
  const { AddedList } = props;
  let total = 0;
  for (const subject of AddedList) {
    total = subject.time + total;
  }

  const BreakTime = (props) => {
    console.log(props);
    // const initialValue = () => Number(localStorage.getItem("Break Time"));
    // const [props, setValue] = useState(initialValue);
    // setValue(props);
    // useEffect(() => {
    //   localStorage.setItem("Break Time", props);
    // }, [props]);
  };

  return (
    <div className="time">
      {/* Profile */}
      <div className="Profile">
        <img src={profile} alt="Profile" />
        <div className="Info">
          <p>
            <strong>Hasan Chowdhury</strong>
          </p>
          <p>
            <FontAwesomeIcon icon={faLocationDot} /> Dhaka, Bangladesh
          </p>
        </div>
      </div>
      {/* Other_Info */}
      <div className="Other_Info common d-flex justify-content-between align-items-center mt-5">
        <div className="d-flex flex-column info">
          <h5>Age</h5>
          <h5>20</h5>
        </div>
        <div className="d-flex flex-column info">
          <h5>Class</h5>
          <h5>10</h5>
        </div>
        <div className="d-flex flex-column info">
          <h5>Preparation</h5>
          <h5>SSC</h5>
        </div>
      </div>
      {/* Break Buttons */}
      <div className="mt-5 ms-3">
        <h2>Add a Break Time</h2>
      </div>
      <div className="Break d-flex justify-content-between ms-3 me-3">
        <div className="d-flex flex-column info">
          <button className="add_btn" onClick={() => BreakTime(30)}>
            30min
          </button>
        </div>
        <div className="d-flex flex-column info">
          <button className="add_btn" onClick={() => BreakTime(45)}>
            45min
          </button>
        </div>
        <div className="d-flex flex-column info">
          <button className="add_btn" onClick={() => BreakTime(60)}>
            60min
          </button>
        </div>
      </div>
      {/* Study Details */}
      <div className=" Study Details">
        <div className="mt-5 ms-3">
          <h2>Study Details</h2>
        </div>
        <div className="common ">
          <div className="d-flex justify-content-between Study mb-3">
            <h5>Total Time for Study</h5>
            <p>{total} Hour</p>
          </div>
          <div className="d-flex justify-content-between Study">
            <h5>Selected Break Time</h5>
            <div id="bt"></div>
          </div>
        </div>
      </div>
      {/* Toast Button */}
      <div className="d-flex justify-content-center align-items-center">
        <button className="mt-5 complete_btn text-center">
          Study Complete
        </button>
      </div>
    </div>
  );
};

export default Time;
