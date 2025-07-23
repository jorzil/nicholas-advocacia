"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

interface User {
  username: string
}

interface AuthContextValue {
  user: User | null
  isLoading: boolean
  login: (username: string, password: string) => Promise<boolean>
  logout: () => Promise<void>
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const { toast } = useToast()

  /* ------------------------- util: read simple cookie ------------------- */
  const readCookie = useCallback((name: string): string | undefined => {
    if (typeof document === "undefined") return
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"))
    return match ? decodeURIComponent(match[2]) : undefined
  }, [])

  /* ------------------------- initial session check ---------------------- */
  useEffect(() => {
    const checkSession = async () => {
      const token = readCookie("auth_token")
      if (!token) {
        setIsLoading(false)
        return
      }

      try {
        const res = await fetch("/api/admin/auth/session", {
          headers: { Authorization: `Bearer ${token}` },
        })
        if (res.ok) {
          const data = await res.json()
          setUser({ username: data.user.username })
        } else {
          document.cookie = "auth_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
          setUser(null)
        }
      } catch (err) {
        console.error("Erro ao validar sessão:", err)
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }
    checkSession()
  }, [readCookie])

  /* ------------------------------ login --------------------------------- */
  const login = useCallback(
    async (username: string, password: string) => {
      setIsLoading(true)
      try {
        const res = await fetch("/api/admin/auth", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        })

        if (!res.ok) return false

        const data = await res.json()
        document.cookie = `auth_token=${data.token}; Path=/`
        setUser({ username: data.user.username })
        return true
      } catch (err) {
        console.error("Falha no login:", err)
        toast({
          title: "Erro de login",
          description: "Não foi possível realizar o login.",
          variant: "destructive",
        })
        return false
      } finally {
        setIsLoading(false)
      }
    },
    [toast],
  )

  /* ----------------------------- logout --------------------------------- */
  const logout = useCallback(async () => {
    setIsLoading(true)
    try {
      await fetch("/api/admin/auth/logout", { method: "POST" })
    } catch {
      /* ignore */
    } finally {
      document.cookie = "auth_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
      setUser(null)
      setIsLoading(false)
      router.push("/admin/login")
    }
  }, [router])

  const value: AuthContextValue = {
    user,
    isLoading,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

/* --------------------------- helper hook -------------------------------- */
export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth deve ser utilizado dentro de um AuthProvider")
  return ctx
}

/* ------------------------------------------------------------------------ */
/* guarantee named export presence                                          */
