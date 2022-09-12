import Dashboard from './layouts/Dashboard';

import './App.css';
import NavBarDashboard from './components/Navigation/NavBarDash';

function App() {
  return (
    <div className="App">
      <NavBarDashboard />
      <Dashboard />

    </div>
  );
}

export default App;
