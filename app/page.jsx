import Hero from "@/components/Hero";
import About from "@/components/About";
import Image from "next/image";
import Service from "@/components/Service";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
    </main>
  );
}
