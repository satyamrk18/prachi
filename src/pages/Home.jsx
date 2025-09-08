import Navbar from "./../components/navbar.jsx";
import Sample from "../assets/image/sample.jpg";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{ width: "100%" }}>
        <img src={Sample} style={{ width: "100%" }} />
      </div>
    </div>
  );
};
export default Home;
