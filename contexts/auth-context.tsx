"use client"

import type React from "react"
import { createContext, useState, useEffect } from "react"

interface User {
  id: string
  name: string
  email: string
}

interface AuthContextValue {
  user: User | null
  signIn: (user: User) => void
  signOut: () => void
  isAuthenticated: boolean
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user

  useEffect(() => {
    // Check if user is already authenticated (e.g., from localStorage)
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const signIn = (user: User) => {
    setUser(user)
    localStorage.setItem("user", JSON.stringify(user))
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const value: AuthContextValue = {
    user,
    signIn,
    signOut,
    isAuthenticated,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
