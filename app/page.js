import Navbar from "./components/navbar";
import Services from "./components/services";
import ThePlace from "./components/theplace";
import WorkingTime from "./components/workingTime";

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Services/>
      <WorkingTime/>
      <ThePlace/>
    </main>
  );
}
