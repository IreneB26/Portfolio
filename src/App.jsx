import './App.css';

import ContactAside from './components/contact-sidebar/contact-aside';

import { Route, Routes} from 'react-router-dom';

import Index from './pages/index';
import NavMenu from './components/menu/menu';

function App() {
  return (
    <div className="App">


        

  

    

       <section className='contain'>
            <Routes>
                
              <Route path="/" element={<Index />} />
              
            </Routes>
       </section>
       
       <section className='aside'>
          
          <ContactAside/>
          
        </section>


        <NavMenu/>
    
    </div>
  );
}

export default App;
