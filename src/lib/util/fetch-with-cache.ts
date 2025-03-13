export default async function fetchWithCache<T>(
  endpoint: string,
  params: Record<string, any> = {}, // Allow flexible types
  tags: string[] = [],
  revalidate: number = 60
): Promise<T | null> {
  try {
    const url = new URL(
      `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}${endpoint}`
    )
    const urlParams = new URLSearchParams()

    Object.entries(params)
      .filter(([_, value]) => value !== undefined)
      .forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => urlParams.append(key, String(v))) // Append each array value separately
        } else if (typeof value === "object") {
          urlParams.append(key, JSON.stringify(value)) // Convert objects to JSON
        } else {
          urlParams.append(key, String(value)) // Handle strings and numbers
        }
      })

    url.search = urlParams.toString()

    const response = await fetch(url.toString(), {
      headers: {
        "Content-Type": "application/json",
        "x-publishable-api-key":
          process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "",
      },
      next: { revalidate, tags }, // Next.js caching
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`Error calling API ${endpoint}:`, error)
    return null
  }
}
