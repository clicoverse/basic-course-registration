const Cart = ({ selectedCourses, totalPrice, totalCreditHours, remaining }) => {
  // console.log(selectedCourses);
  return (
    <div className="p-5 rounded-box bg-base-100 shadow-xl">
      <div>
        <h3 className="font-bold text-2xl text-center text-[#2F80ED] p-3">
          Credit Hours Remaining {remaining} hr
        </h3>
        <hr />
        <p className="py-4 text-2xl font-bold">Course Name</p>
      </div>
      <div>
        {selectedCourses.map((course) => (
          <div key={course.id} className="py-2 px-3">
            <ol className="list-decimal list-inside">
              <li>
                {/* {`${course.serialNumber}: ${course.title}`} */}
                {course.title}
              </li>
            </ol>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        <hr />
        <p className="text-xl font-semibold">
          Total Credit Hour : {totalCreditHours}
        </p>
        <hr />
        <p className="text-xl font-semibold">Total Price: {totalPrice} USD</p>
      </div>
    </div>
  );
};

export default Cart;
