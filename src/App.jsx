import Hero from "./components/Hero";
import Links from "./components/Links";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app bg-black text-white">
      <div className="container mx-auto flex flex-col items-center text-center">
        <Hero />
        <Links />
        <Footer />
      </div>
    </div>
  );
}

export default App;
