/**
 * Icons
 */
import {
  GrInstagram,
  GrFacebookOption,
  GrLinkedinOption,
  GrTwitter
} from "react-icons/gr";

export function Social({
  className,
}: {
  className?: string
}) {
    return (
      <div className="flex flex-row gap-5 max-[1050px]:justify-center items-center justify-start">
        <a target="_blank" href="https://www.twitter.com/maspmuseu" className={`border-inherit hover:text-black border-4 flex p-2 w-15 h-15 ${className}`}>
          <GrTwitter size={30} />
        </a>
        <a target="_blank" href="https://www.instagram.com/masp" className={`border-inherit hover:text-black border-4 flex p-2 w-15 h-15 ${className}`}>
          <GrInstagram size={30} />
        </a>
        <a target="_blank" href="https://www.facebook.com/maspmuseu" className={`border-inherit hover:text-black border-4 flex p-2 w-15 h-15 ${className}`}>
          <GrFacebookOption size={30} />
        </a>
        <a target="_blank" href="https://www.linkedin.com/company/museu-de-arte-de-s%C3%A3o-paulo-assis-chateaubriand---masp?originalSubdomain=br" className={`border-inherit hover:text-black border-4 flex p-2 w-15 h-15 ${className}`}>
          <GrLinkedinOption size={30} />
        </a>
    </div>
    )
}