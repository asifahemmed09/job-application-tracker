import { Briefcase } from "lucide-react"
import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <Link href="/"
       className="flex items-center gap-2 text-xl font-semibold text-primary"
      >
       <Briefcase size={32} />
       Job Tracker
      </Link>
    </nav>
  )
}

export default Navbar