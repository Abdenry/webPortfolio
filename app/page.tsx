export default function Home() {
  return (
    <main className="pt-[60px] bg-[#212121] min-h-screen">
      <div className="flex flex-col mx-3 sm:mx-12  md:mx-32 lg:mx-54 xl:mx-96 pt-6 text-white justify-end">
        {/* Greetting Card */}
        <div className="bg-[#333333] p-6 px-16 mb-6 rounded-lg min-w-[300px]">
          <h1 className="text-center line-clamp-3 sm:text-base">
            {" "}
            Hello, I'm a mechatronics and computer science student from
            Brisbane!{" "}
          </h1>
        </div>
        {/* More Detailed Greeting */}
        <div className="flex flex-col justify-start">
          <div>
            <h1 className="font-extrabold text-3xl text-nowrap">
              {" "}
              Brayden Annan
            </h1>
          </div>
          <div> </div>
        </div>
      </div>
    </main>
  );
}
