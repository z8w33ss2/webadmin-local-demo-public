/**
 * Formatea un número como precio en MXN.
 */
export function formatPrice(
  amount: number,
  currency: string = 'MXN',
): string {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  }).format(amount)
}

/**
 * Formatea una fecha ISO a formato legible en español.
 */
export function formatDate(
  isoString: string,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
): string {
  return new Date(isoString).toLocaleDateString('es-MX', options)
}

/**
 * Formatea una fecha ISO a formato corto: "15 jun 2024".
 */
export function formatDateShort(isoString: string): string {
  return formatDate(isoString, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

/**
 * Convierte un texto a slug URL-safe.
 */
export function toSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

/**
 * Trunca un texto a un máximo de caracteres, añadiendo "…".
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength - 1) + '…'
}

/**
 * Capitaliza la primera letra de un string.
 */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

/**
 * Genera tiempo de lectura estimado basado en número de palabras.
 */
export function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute))
}
