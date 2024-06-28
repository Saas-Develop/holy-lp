import GoogleTagManager from "@/components/Pixel/GooglePixel";
import HomePage from "@/pages/Home";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <GoogleTagManager/>
      <HomePage/>
    </main>
  );
}
