import './App.scss';

import Section1PS from './layout/PremiumSeating/Section1PS';
import Section2PS from './layout/PremiumSeating/Section2PS';
import Section3PS from './layout/PremiumSeating/Section3PS';

const App = () => {
  return (
    <div className="App">
      <main role="main">
        <Section1PS />
        <Section2PS />
        <Section3PS />
      </main>
    </div>
  );
}

export default App;
