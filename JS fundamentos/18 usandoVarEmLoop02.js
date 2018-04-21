const funcs = []

//push add novo elemento no array
for (var i = 0; i< 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

console.log(funcs)

funcs[2]()
funcs[8]()

for (var i = 0; i< 10; i++){
    console.log(funcs[i]())
}


funcs[2]()
funcs[8]()
