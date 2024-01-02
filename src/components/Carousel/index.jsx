import React, { useState, useEffect } from "react";
import Button from "../buttonGroup";

const imageList = [
  "https://images.unsplash.com/photo-1687294920924-b82d79864991?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
  "https://images.unsplash.com/photo-1685514473556-c983a5971d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1686481394225-dba348a3ee0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80",
  "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  "https://plus.unsplash.com/premium_photo-1673278171570-18af2a6ece31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80",
  "https://images.unsplash.com/photo-1686556029158-90f2cc511c04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1686958633466-2a5e0579d2cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1788&q=80",
  "https://images.unsplash.com/photo-1686900248731-5a492eb9a5e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
  "https://plus.unsplash.com/premium_photo-1675756583711-ce312872227b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
];

function Images(props) {
  const [index, setIndex] = useState(0);
  const [autoMode, setAutoMode] = useState(false);



  useEffect(() => {
    let intervalId;

    if (autoMode) {
      intervalId = setInterval(() => {
        onNextImage();
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [index, autoMode]);

  const onNextImage = () => {
    if (index + 1 < imageList.length) {
      setIndex((imageList) => imageList + 1);
    } else {
      setIndex(0);
    }
  };

  const onPreviousImage = () => {
    if (index - 1 >= 0) {
      setIndex((imageList) => imageList - 1);
    } else {
      setIndex(imageList.length - 1);
    }
  };

  const toggleAutoMode = () => {
    setAutoMode(!autoMode);
    console.log("««««« autoMode »»»»»", autoMode);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <img
        style={{
          width: "600px",
          height: "400px",
          objectFit: "cover",
          borderRadius: "5px",
          margitoggleAutoModenBottom: "20px",
        }}
        src={imageList[index]}
        alt="anh xem cho vui"
      />

      <h5>
        {index + 1}/{imageList.length}
      </h5>

      <div className="d-flex">
        <Button
          icon={<i class="fa-solid fa-power-off"></i>}
          buttonClass="btn btn-dark"
          iconClass="icon_secondary"
          onClick={toggleAutoMode}
        />
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <Button
          style={{
            marginRight: "20px",
          }}
          icon={<i className="fa-solid fa-chevron-left fa-xl" />}
          title="Previous"
          buttonClass="button_secondary"
          iconClass="icon_secondary"
          titleClass="title_secondary"
          onClick={onPreviousImage}
        />

        <Button
          icon={<i className="fa-solid fa-chevron-right fa-xl" />}
          title="Next"
          isRevert
          buttonClass="button_secondary"
          iconClass="icon_secondary"
          titleClass="title_secondary"
          onClick={onNextImage}
        />
      </div>
    </div>
  );
}

export default Images;


