import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import BalanceProvider from "./context/BalanceProvider";

function App() {
  return (
    <>
      <BalanceProvider>
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
      </BalanceProvider>
    </>
  );
}

export default App;
