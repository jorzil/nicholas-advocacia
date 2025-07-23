"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

interface AuthState {
  user: { id: string; name: string } | null
  token: string | null
}

interface AuthContextValue extends AuthState {
  login: (token: string, user: { id: string; name: string }) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    token: null,
  })

  useEffect(() => {
    // Carrega estado salvo no localStorage (client only)
    const savedToken = typeof window !== "undefined" ? localStorage.getItem("auth_token") : null
    const savedUser = typeof window !== "undefined" ? localStorage.getItem("auth_user") : null
    if (savedToken && savedUser) {
      setState({ token: savedToken, user: JSON.parse(savedUser) })
    }
  }, [])

  const login = (token: string, user: { id: string; name: string }) => {
    localStorage.setItem("auth_token", token)
    localStorage.setItem("auth_user", JSON.stringify(user))
    setState({ token, user })
  }

  const logout = () => {
    localStorage.removeItem("auth_token")
    localStorage.removeItem("auth_user")
    setState({ token: null, user: null })
  }

  return <AuthContext.Provider value={{ ...state, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>")
  return ctx
}
