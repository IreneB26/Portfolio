import './App.css';

import ContactAside from './components/contact-sidebar/contact-aside';

import { Route, Routes} from 'react-router-dom';

import Index from './pages/index';
import NavMenu from './components/menu/menu';
import Proyectos from './pages/proyectos/proyectos';
import ContainProyectos from './pages/contain_proyectos/containProyectos';

function App() {
  return (
      <div className="App">

        <NavMenu/>

         
                <Routes>
                    
                  <Route path="/" element={<Index/>} />
                  <Route path="/proyectos" element={<ContainProyectos/>} />

                  <Route path="/infoProyecto" element={<Proyectos/>} />
                  
                </Routes>
        
          
        <ContactAside/>
          
  
        
        
       </div>
  );
}

export default App;
