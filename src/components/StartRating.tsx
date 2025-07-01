import React from 'react';

interface StarRatingProps {
  rating: number; // Number of stars to render
  maxStars?: number; // Maximum number of stars (optional, default is 5)
  starColor?: string; // Color of the stars (optional, default is yellow)
  starSize?: string; // Size of the stars (optional, default is 1.5rem)
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
  starColor = 'text-yellow-400',
  starSize = 'text-2xl',
}) => {
  // Ensure the rating is within the valid range (0 to maxStars)
  const clampedRating = Math.min(Math.max(rating, 0), maxStars);

  return (
    <div className="flex">
      {Array.from({ length: maxStars }, (_, index) => (
        <span
          key={index}
          className={`${starSize} ${
            index < clampedRating ? starColor : 'text-gray-300'
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;