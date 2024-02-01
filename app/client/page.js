"use client"
import { useSession } from "next-auth/react"

const Client = () => {
    const { data: session } = useSession({
        required: true
    })
  return (
    <div className="text-xl">
      Pagina com segurança <span className="text-blue-300">Client Auth </span>
    </div>
  )
}

export default Client
