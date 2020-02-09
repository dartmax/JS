var counterModule = (function () {
  var instance,
      counter = 0;

  var getCounter = function () {
    return counter;
  }

  var increaseCounter = function () {
    counter ++;
  }

  var createInstance = function () {
    return {
      getCounter: getCounter,
      increaseCounter: increaseCounter
    }
  }

  return {
    getInstance: function () {
      return instance || (instance = createInstance());
    }
  }
