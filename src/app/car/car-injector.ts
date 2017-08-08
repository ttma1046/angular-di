injector = ReflectiveInjector.resolveAndCreate([Car, Engine, Tires]);
let car = injector.get(Car);