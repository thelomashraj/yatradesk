import {createHmac,timingSafeEqual} from "node:crypto";
export function verifyMetaSignature(rawBody:string,signature:string| null,appSecret:string){if(!signature?.startsWith("sha256="))return false;const actual=Buffer.from(signature.slice(7),"hex");const expected=createHmac("sha256",appSecret).update(rawBody).digest();return actual.length===expected.length&&timingSafeEqual(actual,expected)}
