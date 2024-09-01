import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center mt-20">
     <div className="flex flex-col items-center">
      <h1>Welcome to the home page</h1>

        <div className="flex items-center flex-col">
          <p>Client page : Interactive client-side rendering in action</p>
          <p>Server page : Optimised static content for SEO</p>
        </div>

     </div>

    </div>
  );
}
