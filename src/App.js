import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Campaign from './components/Campaign';
import Products from './components/Products';
import SelectCampaign from './components/SelectCampaign';
import Campaignstate from './context/campaignstate';

function App() {
  return (
    <>
      <Campaignstate>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/campaign" element={<Campaign />} />
              <Route exact path="/products" element={<Products />} />
              <Route exact path="/selectcamp" element={<SelectCampaign />} />
            </Routes>
          </div>
        </Router>
      </Campaignstate>
    </>
  );
}

export default App;
