import API from "./Components/news/news";
import Navbar from "./Components/news/navbar";
import Newsfooter from "./Components/news/newsfooter";
import Newapi from "./Components/news/Newapi";
// import Functionapi from "./Components/news/functionapi";

function App() {
  return (
    <div className='App '>
      <Navbar />
      <API />
      <Newsfooter />
      {/* <Newapi />
      {/* <Functionapi /> */}
    </div>
  );
}

export default App;
