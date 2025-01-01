import Link from "next/link"
import { FaHome, FaPlusCircle } from 'react-icons/fa'
import { Button } from "@/components/ui/button"

const HeaderMenu = () => {
  return (
    <header className="bg-background border-b bg-gray-100">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" passHref>
            <Button variant="ghost" className="w-12 px-0">
              <FaHome className="h-6 w-6" />
              <span className="sr-only">Home</span>
            </Button>
          </Link>
          <Link href="/create" passHref>
            <Button variant="ghost" className="flex items-center space-x-2">
              <FaPlusCircle className="h-5 w-5" />
              <span>投稿を作成</span>
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default HeaderMenu

