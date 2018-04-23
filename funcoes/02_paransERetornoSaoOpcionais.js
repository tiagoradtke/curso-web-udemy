function area(a , b){
    let area = a * b
    if(area > 20){
        console.log(`valor acima do permitido ${area}m2.`)
    }else{
        return area
    }
}

console.log(area(2 , 5))
console.log(area(5 , 5))
console.log(area(2 ))
console.log(area(2 , 43,54 ,65))