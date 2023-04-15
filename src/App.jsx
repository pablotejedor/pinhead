import About from './components/About';
import Products from './components/Products';
import Header from './components/Header';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

import useWindowInfo from './hooks/useWindowInfo';

function App() {
     const { mobileDesign } = useWindowInfo();

     return (
          <main className="d-flex flex-column align-items-center min-vh-100">
               {!mobileDesign && <Header />}
               <About />
               <Products />
               <Services />
               <Contact />
               <Footer />
          </main>
     );
}

export default App;
