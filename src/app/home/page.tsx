'use client'
import { Metadata } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Personal Finance Tracker',
}



export default function Page() {
  
  const router = useRouter()
  return <div>
    <h1>Hello Home</h1>
 {/* <Link href="/dashboard">Dashboard</Link> */}
 <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
 </div>

}
