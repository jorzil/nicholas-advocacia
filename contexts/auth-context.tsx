"use client"

import type React from "react"
import { createContext, useState, useEffect, useContext, useCallback } from "react"
import { useRouter } from "next/navigation"

interface AuthContextType {
  user: { username: string } | null
  isLoading: boolean
  login: (token: string) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ username: string } | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  const checkAuth = useCallback(async () => {
    try {
      const response = await fetch("/api/admin/auth/session", {
        credentials: "include", // Important: send cookies with the request
      })
      if (response.ok) {
        const data = await response.json()
        if (data.isAuthenticated) {
          setUser(data.user)
        } else {
          setUser(null)
        }
      } else {
        setUser(null)
      }
    } catch (error) {
      console.error("Failed to check auth session:", error)
      setUser(null)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  const login = useCallback(
    (token: string) => {
      // In a real app, you'd store the actual token securely (e.g., httpOnly cookie set by server)
      // For this mock, we just set a flag or a mock user
      setUser({ username: "admin" })
      // Optionally, trigger a re-check of auth to update state from server
      checkAuth()
    },
    [checkAuth],
  )

  const logout = useCallback(async () => {
    try {
      await fetch("/api/admin/auth/logout", {
        method: "POST",
        credentials: "include", // Important: send cookies to clear session
      })
      setUser(null)
      router.push("/admin/login")
    } catch (error) {
      console.error("Failed to logout:", error)
    }
  }, [router])

  return <AuthContext.Provider value={{ user, isLoading, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
