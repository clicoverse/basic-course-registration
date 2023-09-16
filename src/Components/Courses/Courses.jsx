import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Course from "../Course/Course";
import Cart from "../Cart/Cart";
import Swal from "sweetalert2";

const Courses = () => {
  const [courses, setCourses] = useState([]); //State Declearation
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [totalCreditHours, setTotalCreditHours] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [remaining, setRemaining] = useState(20);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleSelectedCourse = (course, setIsButtonDisabled) => {
    // console.log(course);
    // const serialNumber = selectedCourses.length + 1;
    // console.log(serialNumber);
    const isExist = selectedCourses.find((item) => item.id == course.id);
    let price = course.price;
    let time = course.time;

    // if (isExist) {
    // } else {
    // }

    // console.log(totalRemaingHrs);

    if (isExist) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have already purchsed this course!",
      });
    } else {
      selectedCourses.forEach((item) => (price += item.price));
      selectedCourses.forEach((item) => (time += item.time));
    }
    const totalRemaingHrs = 20 - time;
    console.log("time is:", time);
    console.log("remaing time:", totalRemaingHrs);
    console.log("price is:", price);

    if (time > 20) {
      return Swal.fire({
        icon: "warning",
        title: "Sorry...",
        text: "Total Hours Exost!",
      });
    } else {
      setTotalCreditHours(time);
      setRemaining(totalRemaingHrs);
      setTotalPrice(price);
      setSelectedCourses([...selectedCourses, course]);
      // setIsButtonDisabled(!isButtonDisabled);
    }
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
        <Cart
          selectedCourses={selectedCourses}
          totalCreditHours={totalCreditHours}
          isButtonDisabled={isButtonDisabled}
          remaining={remaining}
          totalPrice={totalPrice}
        ></Cart>
      </div>
    </div>
  );
};

export default Courses;
