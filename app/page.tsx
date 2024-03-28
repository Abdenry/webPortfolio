import Image from "next/image";
import houseIsland from "@/public/housesIsland.jpg";

export default function Home() {
  return (
    <main className="h-[4200px] pt-[60px] bg-[#212121]">
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="text-white"> Content here! </h1>
        </div>
        <div className="pt-2">
          <Image
            className="rounded-lg "
            src={houseIsland}
            width={500}
            height={1000}
            alt="BackDrop"
          />
        </div>
      </div>
    </main>
  );
}
