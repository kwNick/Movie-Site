import CarouselBanner from "@/components/CarouselBanner";
import MovieContainer from "@/components/MovieContainer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <p className="tracking-wider">Movie Streaming Website!!</p>
      <CarouselBanner />
      <div className="flex flex-col space-y-2">
        <MovieContainer />
      </div>
    </main>
  );
}
