// console.log('Request data...');

// // setTimeout(() => {
// //     console.log('Preparing data...');

// //     const backendData = {
// //         server: 'AWS',
// //         port: 2000,
// //         status: 'working'
// //     }

// //     setTimeout(() => {
// //         backendData.modified = true;
// //         console.log('Data received', backendData)
// //     })

// // }, 2000)

// // Функция resolve вызывается когда что-то прошло успешно
// const p = new Promise((resolve, reject) => {
//     // Здесь пишем какой-то асинхронный код, который будем выполнять.
//     setTimeout(() => {
//         console.log('Preparing data...')
//         const backendData = {
//             server: 'AWS',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData)
//     }, 2000)
// })


// // Мы не создаем callback'и внутри callback'ов и это читается намного лучше. Плюс удобно, что
// // Объект p можно передавать куда угодно и с помощью then можно говорить че делать когда Promise p был выполнен.
// p.then((data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true;
//             resolve(data)    
//         }, 2000)
//     })
    
//     // p2.then(clientData => {
//     //     console.log('Data recieved', clientData)
//     // })
// })
//     .then(clientData => {
//         console.log('Data received', clientData)
//         clientData.fromPromise = true;
//         return clientData
//     })
//     .then(data => {
//         console.log('Modified', data)
//     })
//     .catch(err => console.error('Error: ', err))
//     .finally(() => console.log('Finally'))

const sleep = ms => new Promise(resolve => setTimeout(() => resolve(), ms))

promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
promise2.
// sleep(2000).then(() => console.log('After 2 sec'))
// sleep(3000).then(() => console.log('After 3 sec'))

// Передаем сюда массив Promise'ов и выведется 'All promises', когда все promise'ы будут выполнены.
Promise.all([sleep(2000), sleep(5000)])
    .then(() => {
        console.log('All promises')
    })
// Этим часто пользуются, чтобы подождать промисы из двух endpoint'ов.

// Когда самый первый promise отработает.
Promise.race([sleep(2000), sleep(5000)])
    .then(() => {
        console.log('Race promises')
    })

// По сутим promise'ы это обёртка над асинхронностью, которая добавляет удобства над написанием кода.