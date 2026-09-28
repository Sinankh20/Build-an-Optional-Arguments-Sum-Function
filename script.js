function addTogether(n1,n2){
  if (!Number.isFinite(n1)){
    return undefined
  }
  if (arguments.length===1){
    return function(n){
      return addTogether(n1,n)
    }
  }
  if (!Number.isFinite(n2)){
    return undefined
  } else{
    return n1+n2
  }
}
console.log(addTogether(2)([3]))




