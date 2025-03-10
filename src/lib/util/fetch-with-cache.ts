export default async function fetchWithCache<T>(
  endpoint: string,
  params: Record<string, string | number | undefined> = {},
  tags: string[] = [],
  revalidate: number = 60
): Promise<T | null> {
  try {
    // Convert params to URL query string
    const queryString = new URLSearchParams(
      Object.entries(params)
        .filter(([_, value]) => value !== undefined)
        .map(([key, value]) => [key, String(value)])
    ).toString()

    // Construct full URL
    const url = `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}${endpoint}?${queryString}`

    // Make the fetch request
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "x-publishable-api-key":
          process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "",
      },
      next: { revalidate, tags }, // Apply caching
    })

    if (!response.ok) {
      throw new Error(`Lỗi API: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`Lỗi khi gọi API ${endpoint}:`, error)
    return null
  }
}
