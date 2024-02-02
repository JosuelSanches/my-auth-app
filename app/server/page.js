import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOption } from "../api/auth/[...nextauth]/route";

const ServerPage = async () => {
    const session = await getServerSession(authOption);
    if (!session) redirect("/signin?callbackUrl=/server")
    console.log(session)
  return (
    <div className="text-xl">
        This page have segurity{" "}
        <span className=" text-pink-400"> Provider </span>
        {session?.user?.name}

    </div>
  )
}

export default ServerPage
