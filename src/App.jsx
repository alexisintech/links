import Hero from "./components/Hero";
import Links from "./components/Links";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app min-h-screen bg-black text-white">
      <div className="container mx-auto flex min-h-screen flex-col items-center text-center">
        <Hero />
        <Links />
        <Footer />
      </div>
    </div>
  );
}

export default App;
