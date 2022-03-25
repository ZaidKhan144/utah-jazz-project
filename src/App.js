import './App.scss';

import Section1PS from './layout/PremiumSeating/Section1PS';
import Section2PS from './layout/PremiumSeating/Section2PS';

const App = () => {
  return (
    <div className="App">
      <main role="main">
        <Section1PS />
        <Section2PS />
      </main>
    </div>
  );
}

export default App;
