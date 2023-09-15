const Cart = ({ selectedCourses, totalPrice }) => {
  console.log(selectedCourses);
  return (
    <div className="p-5 rounded-box bg-base-100 shadow-xl">
      <div>
        <h3 className="font-bold text-2xl text-center text-[#2F80ED] p-3">
          Credit Hours Remaining 20 hr
        </h3>
        <hr />
        <p className="py-4 text-2xl font-bold">Course Name</p>
      </div>
      <div>
        {selectedCourses.map((course) => (
          <div key={course.id} className="py-2 px-3">
            <ol>{course.title}</ol>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        <hr />
        <p className="text-xl font-semibold">Total Credit Hour : </p>
        <hr />
        <p className="text-xl font-semibold">Total Price: {totalPrice} USD</p>
      </div>
    </div>
  );
};

export default Cart;
