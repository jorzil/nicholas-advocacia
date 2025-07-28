// This component was previously assumed correct and is included here for completeness.
// No specific refactoring was requested or applied to this file.
export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent" />
    </div>
  )
}
