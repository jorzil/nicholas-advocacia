"use client"

import { createContext, useContext, useState, useEffect, type ReactNode, useCallback } from "react"
import { createClient } from "@supabase/supabase-js"
import type { User, Session } from "@supabase/supabase-js"
import { usePathname, useRouter } from "next/navigation"

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ user: User | null; error: string | null }>
  signOut: () => Promise<{ error: string | null }>
  refreshSession: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables for AuthContext")
}

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // We manage session persistence via cookies in middleware
  },
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  const fetchSession = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/admin/auth/session")
      const data = await res.json()
      setUser(data.user)
      setSession(data.session)
    } catch (error) {
      console.error("Error fetching session:", error)
      setUser(null)
      setSession(null)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchSession()

    // Listen for auth state changes (e.g., from login/logout actions)
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null)
      setSession(session || null)
      setLoading(false)
      // If session changes and we are on an admin page, refresh the page
      if (pathname.startsWith("/admin") && _event === "SIGNED_IN") {
        router.refresh()
      }
      if (pathname.startsWith("/admin") && _event === "SIGNED_OUT") {
        router.push("/admin/login")
        router.refresh()
      }
    })

    return () => {
      authListener.unsubscribe()
    }
  }, [fetchSession, pathname, router])

  const signIn = async (email: string, password: string) => {
    setLoading(true)
    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      if (res.ok) {
        await fetchSession() // Re-fetch session after successful login
        return { user: user, error: null }
      } else {
        const errorData = await res.json()
        return { user: null, error: errorData.error || "Login failed" }
      }
    } catch (error: any) {
      console.error("Sign-in error:", error)
      return { user: null, error: error.message || "Network error" }
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/admin/auth/logout", { method: "POST" })
      if (res.ok) {
        setUser(null)
        setSession(null)
        router.push("/admin/login")
        router.refresh() // Refresh to clear server-side session
        return { error: null }
      } else {
        const errorData = await res.json()
        return { error: errorData.error || "Logout failed" }
      }
    } catch (error: any) {
      console.error("Sign-out error:", error)
      return { error: error.message || "Network error" }
    } finally {
      setLoading(false)
    }
  }

  const refreshSession = useCallback(async () => {
    await fetchSession()
  }, [fetchSession])

  return (
    <AuthContext.Provider value={{ user, session, loading, signIn, signOut, refreshSession }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
