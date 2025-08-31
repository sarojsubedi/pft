import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="grid auto-cols-max md:grid-flow-col ">
        <div className="flex-wrap m-4 p-4">
          <Overview />
        </div>
        <div className="flex-wrap m-4 p-4 overflow-none">
          <Dashboard />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
