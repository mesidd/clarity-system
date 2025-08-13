'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { ReactNode } from "react"
import { useAuth } from "@/hooks/useAuth"
import { Navbar } from "@/components/Navbar"

export default function AuthLayout({children}: {children: ReactNode}){

  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(()=> {
    if(!loading && !user){
      router.push('/signup')
    }
  },[user, loading, router])

  if(loading || !user){
    return
    // return(
    //   <div className="flex items-center justify-center h-screen">
        
    //   </div>
    // )
  }
  return <>{children}</>
}