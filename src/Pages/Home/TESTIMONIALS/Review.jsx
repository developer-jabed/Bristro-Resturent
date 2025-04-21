import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="max-w-5xl mx-auto my-16 px-4">
      <div className="bg-white border border-green-200 shadow-lg rounded-2xl p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-red-600">
          ❤️ What Our Customers Say
        </h2>
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false}
          interval={5000}
          animation="openAnimation"
          className="rounded-xl"
        >
          {reviews.map((review) => (
            <div
              key={review._id}
              className="flex flex-col items-center justify-center gap-5 p-6 transition duration-300 ease-in-out hover:scale-[1.02]"
            >
              <StarRatings
                rating={review.rating}
                starRatedColor="#FFD700"
                numberOfStars={5}
                name="rating"
                starDimension="28px"
                starSpacing="4px"
              />
              <p className="text-white text-lg italic text-center max-w-2xl">
                “{review.details}”
              </p>
              <h4 className="text-lg font-semibold text-green-700">
                — {review.name}
              </h4>
            </div>
          ))}
        </AutoplaySlider>
      </div>
    </div>
  );
};

export default Review;
