import './App.css';
import Header from './Header';
import Body from './Body';
import Lists from './Lists';
import About from './About';
import Categories from './Categories';
import Courses from './Courses';
import Testimonial from './testimonial';
import Footer from './Footer';

function App(){
  return(
    <div className="App">
          <Header />
          <Body />
          <Lists/>
          <About/>
          <Categories/>
          <Courses/>
          <Testimonial/>
          <Footer/>
    </div>
  )
}

export default App;


