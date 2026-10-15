export const OPT_OUT=/\b(stop|unsubscribe|band\s*karo|band\s*kijiye|mat\s*bhejo|रोकें|बंद\s*करो)\b/i;
export function hasOptedOut(text:string){return OPT_OUT.test(text.trim())}
export function hasUnsafePriceOrClaim(text:string){return /(?:₹|\bINR\s?\d|\bRs\.?\s?\d|\b\d[\d,]*(?:\.\d{1,2})?\s?(?:rupees?|रुपये|रु\.?))|\b(confirmed|booked)\b/i.test(text)}
export function withinWhatsAppWindow(expiresAt:string|null,now=new Date()){return !!expiresAt&&now.getTime()<Date.parse(expiresAt)}
export function maskPhone(value:string){return value.length<5?"***":`${value.slice(0,2)}••••${value.slice(-2)}`}
