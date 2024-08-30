import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useState } from "react";


export default function App() {
  const [score, setScore] = useState(0);
  return (
    <section className="bg-[url('src/assets/background.jpg')] bg-no-repeat bg-cover flex flex-col">
      <Navbar score={score} />
      <Hero setScore={setScore} score={score} />
    </section>
  );
}
