"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"

interface User {
  username: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (username: string, token: string) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const token = Cookies.get("auth_token")
    if (token === "valid-admin-token") {
      // In a real app, you'd fetch user details from an API using the token
      setUser({ username: "admin" })
    }
    setIsLoading(false)
  }, [])

  const login = useCallback(
    (username: string, token: string) => {
      Cookies.set("auth_token", token, { expires: 7, secure: process.env.NODE_ENV === "production" }) // Expires in 7 days
      setUser({ username })
      router.push("/admin/blog")
    },
    [router],
  )

  const logout = useCallback(() => {
    Cookies.remove("auth_token")
    setUser(null)
    router.push("/admin/login")
  }, [router])

  return <AuthContext.Provider value={{ user, isLoading, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthContextProvider")
  }
  return context
}
