export const addCart = (product) => {
 return {
 type : "ADDITEM"  ,
 payload : product  
 }
}


export const del = (product) => {
 return {
 type : "DELETECART"  ,
 payload : product  
 }
}

