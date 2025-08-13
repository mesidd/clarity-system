import { Navbar } from "@/components/Navbar";
import { SignOutButton } from "@/components/SignOutButton";

export default function DashboardPage(){
  return(
    <div>
      <div>
        <Navbar />
      </div>
    <div className="flex min-h-screen justify-center items-center flex-col">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-2xl mb-6">You are logged in! 🎉</p>
    </div>
    </div>
  )
}