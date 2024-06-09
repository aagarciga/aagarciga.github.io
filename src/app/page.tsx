import Logotype from "@/components/ui/Logotype";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-center">
      <Logotype width={64} height={64} fill="hsla(var(--foreground-hsl), 1)" />
      <h1 className="text-gunmetal">Alex Alvarez Gárciga</h1>
      <Image src="logotype.svg" alt="logotype" width={92} height={92} />
    </main>
  );
}
