// Formats an amount in minor units (cents) for display.
export function formatMoney(cents, currency = "AUD", locale = "en-AU") {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(cents / 100);
}
