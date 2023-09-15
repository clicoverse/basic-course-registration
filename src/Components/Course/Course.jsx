import { HiOutlineBookOpen } from "react-icons/hi";
import { PiCurrencyDollarSimpleLight } from "react-icons/pi";
import PropTypes from "prop-types";

const Course = ({ course, handleSelectedCourse }) => {
  const { image, title, description, time, price } = course;
  // console.log(course);
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure className="p-5 mx-auto w-full">
        <img className="w-full" src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title ">{title}</h2>
        <p>{description}</p>
        <div className="flex justify-between items-center p-2">
          <div className="flex gap-2 items-center">
            <PiCurrencyDollarSimpleLight className="text-2xl" />
            <p className="font-semibold">Price: {price} </p>
          </div>
          <div className="flex gap-2 items-center">
            <HiOutlineBookOpen className="text-2xl" />
            <p className="font-semibold">Credit: {time}hr</p>
          </div>
        </div>
        <div className="card-actions">
          <button
            onClick={() => handleSelectedCourse(course)}
            className="bg-[#2F80ED] text-white btn w-full"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
