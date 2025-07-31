import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row gap-4">
        <div className="flex-wrap m-4 p-4">
          <Overview />
        </div>
        <div className="flex-wrap m-4 p-4">
          <Dashboard />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
