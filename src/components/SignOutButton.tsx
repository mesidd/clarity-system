'use client'

import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation"
import { Button } from "./ui/button";

export function SignOutButton(){
  const router = useRouter();

  async function handleSignOut(){
    await supabase.auth.signOut()
    router.push('/signin')
  }
  
  return (
    <Button variant={"outline"} onClick={handleSignOut}>Sign Out</Button>
  )

}