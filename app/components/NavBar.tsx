import Image from "next/image"; 

export default function NavBar() {
  return (
    <nav className="bg-white fixed top-0 w-full flex justify-between items-center !px-5 !py-3 z-100">
      <Image
        src="/logo.webp"
        alt="travelhunter logo"
        width={200}
        height={50}
        className="h-auto w-[200px]"
      />

      {/* <div className="flex gap-3.5"> */}
        <Image
          src="/call.svg"
          alt="call"
          width={50}
          height={50}
          className="w-[3rem] h-auto"
        />
        {/* <span className="text-black">&rsaquo;</span> */}

        <Image
          src="/menu.svg"
          alt="call"
          width={50}
          height={50}
          className="w-[3rem] h-auto"
        />
      {/* </div> */}
    </nav>
  );
}
