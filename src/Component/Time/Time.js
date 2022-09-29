import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect } from "react";
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
  const notify = () => {
    toast("👏 Wow Great Job!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const BreakTime = (Value) => {
    localStorage.setItem("Selected Break Time", Value);
    document.getElementById("bt").innerText = Value;
  };

  useEffect(() => {
    const Value = localStorage.getItem("Selected Break Time");
    document.getElementById("bt").innerText = Value;
  }, []);

  return (
    <div>
      <ToastContainer />
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
          <div className="d-flex flex-column info align-items-center">
            <h5>Age</h5>
            <h5>20</h5>
          </div>
          <div className="d-flex flex-column info align-items-center">
            <h5>Class</h5>
            <h5>10</h5>
          </div>
          <div className="d-flex flex-column info ">
            <h5>Preparation</h5>
            <h5 className="text-center">SSC</h5>
          </div>
        </div>
        {/* Break Buttons */}
        <div className="mt-5 ms-3">
          <h2 className="text-center">Add a Break Time</h2>
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
            <h2 className="text-center">Study Details</h2>
          </div>
          <div className="common ">
            <div className="d-flex justify-content-between Study mb-3">
              <h5>Total Time for Study</h5>
              <p>{total} Hour</p>
            </div>
            <div className="d-flex justify-content-between Study">
              <h5>Selected Break Time</h5>
              <div>
                <p>
                  <span id="bt">0</span>Min
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Toast Button */}
        <div className="d-flex justify-content-center align-items-center">
          <button className="mt-5 complete_btn text-center" onClick={notify}>
            Study Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Time;
