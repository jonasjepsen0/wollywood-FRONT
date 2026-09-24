import { useEffect, useState } from 'react'

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const jsonData: T = await response.json()

      setData(jsonData)
    }

    fetchData()
  }, [url])

  return { data }
}
