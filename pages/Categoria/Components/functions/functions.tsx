
const size = (event:any)=>{
    let dimension : number = 0
    const size : number = event.nativeEvent.layout.height
    dimension = size
    
    return Math.trunc(size)
}

export default {size}