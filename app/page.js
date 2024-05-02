import Navbar from "./components/navbar";
import Services from "./components/services";
import ThePlace from "./components/theplace";

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <ThePlace/>
      <Services/>
    </main>
  );
}
