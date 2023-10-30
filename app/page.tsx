import { Cases, CasesThree, CasesTwo, Goal, Hero } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Goal />
      <Cases />
      <CasesTwo />
      <CasesThree />
    </main>
  );
}
