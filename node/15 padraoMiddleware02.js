// Middleware pattern (chain of reponsibility)
/*
> ctx - contexto
    - é o objeto que passa um dado para outro passo, é o modo de comunicar as funções/passos
> next -  quando chamada dispara o próximo passo da cadeia.

> no  ESNext existem profundas diferenças em relação a esse exemplo, mas para mostrar a lógica de funcionamento
esse exemplo ajuda.
*/ 

const passo1 = (ctx , next) => {
    ctx.valor1 = 'mid1'
    next()
}


const passo2 = (ctx , next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = (ctx) => {
    ctx.valor3 = 'mid23'
    
}

const exec = (ctx, ...middlewares)=>{
    const execPasso = indice =>{
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx , () => execPasso(indice + 1))

    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)