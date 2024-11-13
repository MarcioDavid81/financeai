import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "./_components/navbar";

const Home = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col space-y-6 p-6">
        <div className="flex w-full items-center justify-between p-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-3"></div>
        </div>

        <div className="grid grid-cols-[2fr,1fr] gap-6">
          <div className="flex flex-col gap-6"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
