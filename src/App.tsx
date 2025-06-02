import AboutUs from "./Components/AboutUs";
import Amenities from "./Components/Amenities";
import BookNow from "./Components/BookNow";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Rooms from "./Components/Rooms";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Rooms/>
      <Amenities/>
      <Gallery/>
      <AboutUs/>
      <ContactUs/>
      <BookNow/>
      <Footer/>
      
    </>
  );
}

export default App;
