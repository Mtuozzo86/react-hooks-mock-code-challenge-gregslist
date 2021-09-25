import React, { useState } from "react";

function ListingCard({ image, description, location, removeItem, id }) {
  const [isLiked, setIsLiked] = useState(false);

  function handleLike() {
    setIsLiked((isLiked) => !isLiked);
  }

  function handleClick() {
    removeItem(id);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isLiked ? (
          <button onClick={handleLike} className="emoji-button favorite active">
            ★
          </button>
        ) : (
          <button onClick={handleLike} className="emoji-button favorite">
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleClick} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
