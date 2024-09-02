import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center px-12 mb-20 bg-green-600 py-5">
      <div className="flex justify-between items-center w-full">
        <Link href={"/"} className="flex-grow text-center">
          <p className="text-white">Home page</p>
        </Link>
        <Link href={"/static"} className="flex-grow text-center">
          <p className="text-white">Server page</p>
        </Link>
        <Link href={"/interactive"} className="flex-grow text-center">
          <p className="text-white">Client page</p>
        </Link>
      </div>
    </div>
  );
}
