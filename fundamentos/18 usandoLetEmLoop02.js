const funcs = []

//push add novo elemento no array
for (let i = 0; i< 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

console.log(funcs)

funcs[2]()
funcs[8]()

for (let i = 0; i< 10; i++){
    console.log(funcs[i]())
}


funcs[2]()
funcs[6]()
funcs[8]()
