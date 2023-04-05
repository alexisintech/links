import Hero from "./components/Hero";
import Links from "./components/Links";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white h-screen">
      <div className="grid container mx-auto flex flex-col justify-center">
        <Hero />
        <Links />
        <Footer />
      </div>
    </div>
  );
}

export default App;
