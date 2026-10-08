/**
 * Money rules for IBADAN LIFE.
 *
 * ALL money is stored as integer KOBO (1 Naira = 100 kobo). Never use floats
 * for money — this is what makes the economy ledger exact and exploit-proof.
 */

export const KOBO_PER_NAIRA = 100;

/** Convert a Naira amount (e.g. 100.5) to integer kobo (10050). Throws on invalid input. */
export function nairaToKobo(naira: number): number {
  if (typeof naira !== "number" || !Number.isFinite(naira) || naira < 0) {
    throw new Error("Invalid amount: must be a non-negative finite number");
  }
  return Math.round(naira * KOBO_PER_NAIRA);
}

/** Convert integer kobo back to a Naira number for the API boundary. */
export function koboToNaira(kobo: number): number {
  return kobo / KOBO_PER_NAIRA;
}

/**
 * Municipal transaction tax on peer-to-peer wallet transfers: 2.5%.
 * This is a core currency SINK — it drains money from circulation and is paid
 * by the sender (on top of the amount sent).
 */
export const TRANSFER_TAX_BASIS_POINTS = 250; // 2.50% = 250 bps

export function transferTaxKobo(amountKobo: number): number {
  return Math.round((amountKobo * TRANSFER_TAX_BASIS_POINTS) / 10_000);
}
