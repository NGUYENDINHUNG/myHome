import React, { useState, useEffect } from 'react';
import Button from '../buttonGroup';

const imageList = [
  // Danh sách hình ảnh
  // ...
];

function Images(props) {
  const [index, setIndex] = useState(0);
  const [autoMode, setAutoMode] = useState(false); // State để xác định chế độ tự động

  useEffect(() => {
    let intervalId;

    // Kiểm tra nếu chế độ tự động đang được bật thì tạo interval để tự động chuyển ảnh
    if (autoMode) {
      intervalId = setInterval(() => {
        onNextImage();
      }, 3000); // Thời gian tự động chuyển ảnh: 3000ms (3 giây)

      // Trả về một hàm để xóa interval khi component unmount hoặc khi chế độ tự động bị tắt
      return () => clearInterval(intervalId);
    }
  }, [index, autoMode]);

  const onNextImage = () => {
    // Hàm chuyển sang hình ảnh tiếp theo
    // ...
  };

  const onPreviousImage = () => {
    // Hàm chuyển sang hình ảnh trước đó
    // ...
  };

  const toggleAutoMode = () => {
    // Hàm bật/tắt chế độ tự động chuyển ảnh
    setAutoMode(!autoMode);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <img
        // Hiển thị hình ảnh từ imageList[index]
        // ...
      />

      <h5>{index + 1}/{imageList.length}</h5>

      <div style={{ display: 'flex' }}>
        <Button
          // Nút chuyển đổi chế độ tự động
          // ...
        />

        <Button
          // Nút "Previous"
          // ...
        />

        <Button
          // Nút "Next"
          // ...
        />
      </div>
    </div>
  );
}

export default Images;
