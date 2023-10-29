import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen bg-indigo-400 flex flex-col items-center justify-center gap-4 text-white ">
        <p className="text-2xl md:text-3xl font-semibold">Welcome to TodoApp</p>
        <Link href={"/todo"}>
          <button className="bg-white text-indigo-400 font-semibold px-3 md:text-xl   rounded-md border-blue-400 border-2">
            App
          </button>
        </Link>
      </div>
    </>
  );
}
