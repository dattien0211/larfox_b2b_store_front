export default function formatNumber(n: number): string {
  if (n < 1000) return n.toString()

  const rounded = Math.round(n / 100) / 10 // Round to 1 decimal place
  const formatted = Number.isInteger(rounded)
    ? rounded.toFixed(0)
    : rounded.toFixed(1)

  return formatted.replace(".", ",") + "k+"
}
