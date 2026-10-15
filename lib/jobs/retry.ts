export function retryDelaySeconds(attempts:number){return Math.min(3600,30*2**Math.max(0,attempts-1))}
export function nextJobStatus(attempts:number,maxAttempts:number){return attempts>=maxAttempts?"dead":"queued" as const}
