"use client"
import Button from "@/components/ui/Button"
import { useRouter } from "next/navigation"
import { LuMoveRight } from "react-icons/lu"


const AboutButton = () => {
    const router = useRouter();
  return (
      <div>
         <Button
          title="DISCOVER"
          className="w-fit text-sm rounded-sm mt-4"
          Icon={<LuMoveRight />}
          onClick={ () => router.push('/services') }
        
        />
      </div>
  )
}

export default AboutButton
