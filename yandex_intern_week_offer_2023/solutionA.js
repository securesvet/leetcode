

// Решение требуется оформить по шаблону: ``` module.exports = function(orders) {
//     // основная функция
//     // ...
//     }
    
//     // вспомогательные функции
//     // ... ```
    
// {"index":"0000","executionTime":100,"expiredAt":200}
module.exports = function(orders) {
    let timeExecutionTook = 0;
    let countOfSucessfulExecutions = 0;
    for (let order of orders) {
        const sumOfTimeTookAndCurrentOrder = timeExecutionTook + order.executionTime;
        if (sumOfTimeTookAndCurrentOrder <= order.expiredAt) {
            timeExecutionTook = sumOfTimeTookAndCurrentOrder;
            ++countOfSucessfulExecutions;
        }
    }
    return countOfSucessfulExecutions;
}