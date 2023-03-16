import Counter from "./components/Counter";
import CTA from "./components/CTA";
import Episode from "./components/Episode";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Host from "./components/Host";
import { EpisodeProvider } from "./context/EpisodeContext";

export default function App() {
  return (
    <EpisodeProvider>
      <div className="bg-zinc-900 text-gray-200 font-poppins">
        <Hero />
        <Host />
        <Episode />
        <Counter />
        <CTA />
        <Footer />
      </div>
    </EpisodeProvider>
  );
}
