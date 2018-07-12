/*
npm i node-schedule@1.3.0 -E
*/

const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 13 * * 4', function(){
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1')
},20000)
/*
Funções temporizadoras JS
setImmediate
setInterval

*/

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1 , 5)]
regra.hour  = 13
regra.second= 30

const tarefa2 = schedule.scheduleJob(regra , function(){
    console.log('executando Tarefa 2!', new Date().getSeconds())
})