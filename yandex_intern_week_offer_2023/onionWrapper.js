function onionWrapper(stringOrFunction) {
    const visitedCities = [];
    const taxFunc = typeof stringOrFunction === 'function' ? stringOrFunction : null;
  
    function superOnion(...visited) {
      visitedCities.push(...visited);
  
      function executeTax() {
        const remainingCities = [...new Set(visitedCities)]; // Убираем дубликаты городов
        if (taxFunc) {
          taxFunc(remainingCities);
        }
      }
  
      return executeTax;
    }
  
    function addCity(city) {
      visitedCities.push(city);
      return superOnion;
    }
  
    if (typeof stringOrFunction === 'string') {
      return addCity(stringOrFunction); // Возвращаем функцию для добавления города
    } else if (typeof stringOrFunction === 'function') {
      return superOnion; // Возвращаем superOnion, чтобы его можно было вызвать позднее
    }
  }
  
  module.exports = onionWrapper;
  