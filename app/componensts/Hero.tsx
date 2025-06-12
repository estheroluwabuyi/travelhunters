import NavBar from "./NavBar";
import SearchForm from "./SearchForm";

export default function Hero() {
  return (
    <div className="h-screen w-full bg-white bg-[url('/travel-2.webp')] bg-cover bg-center bg-no-repeat relative">
      <NavBar />

      <div className="heading text-[3rem] absolute h-full w-full flex justify-center items-center  flex-col !px-5">
        <h1 className="text-center text-[3rem] text-white">Verified Hotels for the best prices. No surprises!</h1>
      <SearchForm/>

      </div>

    </div>
  );
}
