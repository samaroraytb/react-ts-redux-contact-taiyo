import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="md:flex">
        <Sidebar />
        <h1>Dashboard</h1>
      </div>
    </>
  );
};

export default Dashboard;
