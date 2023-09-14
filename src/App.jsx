import "./App.css";
import Cart from "./Components/Cart/Cart";
import Courses from "./Components/Courses/Courses";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mx-auto mt-5 py-10">
        Course Registration
      </h1>
      <div className="max-w-screen-xl px-10 py-5 ">
        <Courses></Courses>
        <Cart className="col-span-1"></Cart>
      </div>
    </>
  );
}

export default App;
