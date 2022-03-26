import './App.scss';

import Section1PS from './layout/PremiumSeating/Section1PS';
import Section2PS from './layout/PremiumSeating/Section2PS';
import Section3PS from './layout/PremiumSeating/Section3PS';
import Section4PS from './layout/PremiumSeating/Section4PS';
import Footer from './layout/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <main role="main">
        <Section1PS />
        <Section2PS />
        <Section3PS />
        <Section4PS />
      </main>
      <Footer />
    </div>
  );
}

export default App;
