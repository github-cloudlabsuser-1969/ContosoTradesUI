import React, { useEffect, useState } from "react";
import "./WelcomePopup.css";

function WelcomePopup({ initialShowModal = true }) { // Add prop for initial state
  const [showModal, setShowModal] = useState(initialShowModal);

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {}, [showModal]);

  if (!showModal) {
    return null;
  }

  return (
    <div className="modal" role="dialog">
      <div className="modal-content">
        <div className="container text-center devsecops">
          <h1>WELCOME</h1>
          <h5>TO</h5>
          <h3 className="mb-5">The DevSecOps Day 2 Hackathon!</h3>
        </div>
        <button className="btn close" onClick={closeModal}>Get Started</button>
      </div>
    </div>
  );
}

export default WelcomePopup;
