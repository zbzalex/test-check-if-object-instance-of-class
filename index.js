var checkIfInstanceOf = function(obj, classFunction) {
    if (classFunction === null || classFunction === undefined || typeof classFunction !== "function") {
      return false;
    }
    
    let prototype = Object.getPrototypeOf(obj)
    while(prototype)
    {
        if (prototype === classFunction.prototype) {
          return true;
        }
      
      prototype = Object.getPrototypeOf(prototype)
    }
  
  return false;
};

console.log(checkIfInstanceOf(0, Object))
