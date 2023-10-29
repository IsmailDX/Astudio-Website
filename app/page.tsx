import { Cases, Goal, Hero } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Goal />
      <Cases />
    </main>
  );
}
