"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  Home,
  Briefcase,
  User,
  LogOut,
  Newspaper,
  CreditCard,
  LogIn,
  Wallet,
  Shield,
  Star,
  Users,
  Coins,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "../contexts/AuthContext"

export function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const { isAuthenticated, setIsAuthenticated } = useAuth()

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem("isAuthenticated")
    router.push("/signin")
  }

  const navItems = isAuthenticated
    ? [
        { href: "/dashboard", label: "Dashboard", icon: Home },
        { href: "/tasks", label: "Tasks", icon: Briefcase },
        { href: "/smart-contracts", label: "Smart Contracts", icon: Shield },
        { href: "/reputation", label: "Reputation", icon: Star },
        { href: "/payments", label: "Payments", icon: Wallet },
        { href: "/community", label: "Community", icon: Users },
        { href: "/wallet", label: "My Wallet", icon: Coins },
        { href: "/payment-methods", label: "Payment Methods", icon: CreditCard },
        { href: "/profile", label: "Profile", icon: User },
        { href: "/news", label: "News", icon: Newspaper },
      ]
    : [
        { href: "/", label: "Home", icon: Home },
        { href: "/about", label: "About", icon: User },
        { href: "/how-it-works", label: "How It Works", icon: Briefcase },
        { href: "/smart-contracts", label: "Smart Contracts", icon: Shield },
        { href: "/reputation", label: "Reputation", icon: Star },
        { href: "/payments", label: "Payments", icon: Coins },
        { href: "/community", label: "Community", icon: Users },
        { href: "/signin", label: "Sign In", icon: LogIn },
      ]

  return (
    <nav className="flex flex-col space-y-2">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <Button variant={pathname === item.href ? "secondary" : "ghost"} className="w-full justify-start">
            <item.icon className="h-4 w-4 mr-2" />
            <span>{item.label}</span>
          </Button>
        </Link>
      ))}
      {isAuthenticated && (
        <Button variant="ghost" className="w-full justify-start" onClick={handleLogout}>
          <LogOut className="h-4 w-4 mr-2" />
          <span>Logout</span>
        </Button>
      )}
    </nav>
  )
}

