"use client"

import { useRouter } from 'next/navigation'
import React ,{useEffect} from 'react'

type Props = {}

const page = (props: Props) => {
const router = useRouter()
  useEffect(() => {
    router.push('/home')
  }, [])
  return (
    <div>loading...</div>
  )
}

export default page