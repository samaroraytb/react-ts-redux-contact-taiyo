import Sidebar from "./Sidebar";
import Contact from "./Contact";

const Home = () => (
  <>
    <div className="md:flex">
      <Sidebar />
      <Contact />
    </div>
  </>
);

export default Home;
