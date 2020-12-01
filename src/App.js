import logo from './logo.svg';

import Homepage from './pages/homepage/homepage-component';
import {Route} from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1> Hats page</h1>
  </div>
)

function App() {
  return (
   <div>
    <switch>
      <Route exact path = '/' component={Homepage} />
      <Route path = '/MotherBoard' component={HatsPage} />
    </switch>
   </div>
  );
}

export default App;
