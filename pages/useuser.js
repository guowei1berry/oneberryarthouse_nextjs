import { useEffect } from 'react'
import { useRouter } from 'next/router'

// Here you would fetch and return the user
const useUser = () => ({ user: null, loading: false })

export default function Page() {
  const { user, loading } = useUser()
  const router = useRouter()
  console.log("router",router)

  useEffect(() => {
    if (!(user || loading)) {
      router.push('/loggedin')
    }
  }, [user, loading])

  return <p>Redirecting...</p> ////waiitng
}