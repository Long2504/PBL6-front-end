// export const SSE = new EventSource()
var SSE;
export const SSEClose = ()=>{
    if(SSE){
        SSE.close();
    }
}
export const SSEcreate=(url)=>{
    SSE = new EventSource(url)
    return SSE
}
export const SSEInstance = ()=>{
    if(SSE) return SSE;
}
