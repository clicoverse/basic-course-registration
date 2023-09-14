// import { BsBook, BsCurrencyDollar } from "react-icons/fa";
import PropTypes from "prop-types";

const Course = ({ course }) => {
  const { image, title, description, time } = course;
  // console.log(course);
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center">{title}</h2>
        <p>{description}</p>
        <div className="card-actions mx-auto">
          <button className="btn btn-primary w-full">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Course;
