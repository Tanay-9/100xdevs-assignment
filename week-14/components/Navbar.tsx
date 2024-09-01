import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center px-12 mb-20 bg-green-600 py-5">
      <div className="w-full flex gap-10 justify-center items-center">
      <div>
          <Link href={"/"}>
            <p className="">Home page</p>
          </Link>
        </div>
        <div>
          <Link href={"/static"}>
            <p>Server page</p>
          </Link>
        </div>
        <div>
          <Link href={"/interactive"}>
            <p>client page</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
