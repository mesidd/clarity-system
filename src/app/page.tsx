'use client'
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home(){
  const router = useRouter();

  return(
    <div className="flex justify-center flex-col gap-3.5 items-center min-h-screen">
      <h1 className="text-5xl">Home Page</h1>
      <Button onClick={()=> {router.push('/signup')}} className="cursor-pointer w-[200px]">Sign Up</Button>
      <ModeToggle />
    </div>
  )
}