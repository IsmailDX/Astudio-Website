import {
  Awards,
  Believe,
  Cases,
  CasesThree,
  CasesTwo,
  Clients,
  Goal,
  Hero,
  WeDo,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <Goal />
      <Cases />
      <CasesTwo />
      <CasesThree />
      <WeDo />
      <Believe />
      <Awards />
      <Clients />
    </main>
  );
}
