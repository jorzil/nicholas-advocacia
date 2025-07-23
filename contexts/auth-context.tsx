"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

interface User {
  username: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (username: string, password: string) => Promise<boolean>
  logout: () => Promise<void>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const { toast } = useToast()

  const readCookie = useCallback((name: string): string | undefined => {
    if (typeof document === "undefined") return undefined
    const nameEQ = name + "="
    const ca = document.cookie.split(";")
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === " ") c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
    }
    return undefined
  }, [])

  const setCookie = useCallback((name: string, value: string, days: number) => {
    if (typeof document === "undefined") return
    let expires = ""
    if (days) {
      const date = new Date()
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
      expires = "; expires=" + date.toUTCString()
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/"
  }, [])

  const eraseCookie = useCallback((name: string) => {
    if (typeof document === "undefined") return
    document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
  }, [])

  useEffect(() => {
    const checkSession = async () => {
      try {
        const token = readCookie("auth_token")
        if (token) {
          const res = await fetch("/api/admin/auth/session", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          if (res.ok) {
            const data = await res.json()
            setUser({ username: data.user.username })
          } else {
            eraseCookie("auth_token")
            setUser(null)
          }
        }
      } catch (error) {
        console.error("Failed to check session:", error)
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }
    checkSession()
  }, [readCookie, eraseCookie])

  const login = useCallback(
    async (username: string, password: string) => {
      setIsLoading(true)
      try {
        const res = await fetch("/api/admin/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        })

        if (res.ok) {
          const data = await res.json()
          setCookie("auth_token", data.token, 7) // Set cookie for 7 days
          setUser({ username: data.user.username })
          toast({
            title: "Login bem-sucedido!",
            description: `Bem-vindo, ${data.user.username}.`,
            variant: "default",
          })
          // router.push("/admin/blog") // Removed direct push, handled by LoginPage
          return true
        } else {
          const errorData = await res.json()
          toast({
            title: "Erro de Login",
            description: errorData.message || "Credenciais inválidas.",
            variant: "destructive",
          })
          setUser(null)
          return false
        }
      } catch (error) {
        console.error("Login failed:", error)
        toast({
          title: "Erro de Rede",
          description: "Não foi possível conectar ao servidor.",
          variant: "destructive",
        })
        setUser(null)
        return false
      } finally {
        setIsLoading(false)
      }
    },
    [setCookie, toast],
  )

  const logout = useCallback(async () => {
    setIsLoading(true)
    try {
      const res = await fetch("/api/admin/auth/logout", {
        method: "POST",
      })
      if (res.ok) {
        eraseCookie("auth_token")
        setUser(null)
        toast({
          title: "Logout bem-sucedido!",
          description: "Você foi desconectado.",
          variant: "default",
        })
        router.push("/admin/login")
      } else {
        toast({
          title: "Erro ao fazer logout",
          description: "Tente novamente.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Logout failed:", error)
      toast({
        title: "Erro de Rede",
        description: "Não foi possível conectar ao servidor.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }, [eraseCookie, toast, router])

  return <AuthContext.Provider value={{ user, isLoading, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    if (typeof window === "undefined") {
      return {
        user: null,
        isLoading: true,
        login: async () => false,
        logout: async () => {},
      } as AuthContextType
    }
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
