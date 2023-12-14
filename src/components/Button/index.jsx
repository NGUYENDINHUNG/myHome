
import './button.css';
import React, { useState } from 'react';

function LikeButton() {
  const [isLike, setIsLike] = useState(false);
  const [like, setLike] = useState(false);
  const [align, setAlign] = useState(false);

  function handleLikeButtonClick() {
    setIsLike(true);
    setLike(true);
    setAlign(true);
  }

  return (
    <div className="text-center mt-5">
      <button type="button" className={isLike ? 'new-button' : 'button'} onClick={handleLikeButtonClick}> 
        <i className={`fa-solid fa-heart ${like ? 'new-icon' : 'icon'}`} onClick={handleLikeButtonClick}></i>
        <span className={align ? 'new-align' : ''} onClick={handleLikeButtonClick}> like</span>
      </button>
    </div>
  );
}

export default LikeButton;
