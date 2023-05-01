import Sidebar from "./Sidebar"
import LineChart from "./LineChart"
import WorldMap from "./WorldMap"

const Dashboard = () => {
    return (
        <div className="md:flex md:h-screen">
            <Sidebar />
            <div className="md:overflow-auto w-full">
                <LineChart />
                <WorldMap />
            </div>
        </div>
    )
}

export default Dashboard