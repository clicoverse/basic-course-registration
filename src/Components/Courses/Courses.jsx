import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Course from "../Course/Course";
import Cart from "../Cart/Cart";

const Courses = () => {
  const [courses, setCourses] = useState([]); //State Declearation
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCreditHours, setTotalCreditHours] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleSelectedCourse = (course) => {
    setSelectedCourses([...selectedCourses, course]);
    // console.log(course);
    let price = course.price;
    selectedCourses.forEach((item) => (price += item.price));
    setTotalPrice(price);
  };

  return (
    <div className="max-w-screen-2xl grid grid-cols-3 mx-auto px-10 py-5 gap-5">
      <div className="col-span-2">
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
          {courses.map((course) => (
            <Course
              key={course.id}
              course={course}
              handleSelectedCourse={handleSelectedCourse}
            ></Course>
          ))}
        </div>
      </div>
      <div className="col-span-1">
        <Cart selectedCourses={selectedCourses} totalPrice={totalPrice}></Cart>
      </div>
    </div>
  );
};

export default Courses;
