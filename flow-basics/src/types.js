// @flow

let name: string = 'Faiyaz'
name = 50;
console.log(name)

const numberToString = (num: number): string => `${num}`
numberToString(5)
numberToString('fhf')
numberToString(true)

const acceptsBoolean = (bool: boolean): null => null
acceptsBoolean(true)
acceptsBoolean(0)
acceptsBoolean(!!0)
acceptsBoolean(!'')

const acceptsNumber = (num: number): null => null
acceptsNumber(10)
acceptsNumber(NaN)
acceptsNumber(Infinity)

const acceptsNull = (n: null): null => n
acceptsNull(null)
acceptsNull(undefined)

const acceptsUndefined = (n: void): void => n
acceptsUndefined(undefined)
acceptsUndefined(null)

const optionalFn = (arg ? : any): void => undefined
optionalFn()
optionalFn(undefined)
optionalFn('ff')
optionalFn(5)
optionalFn(5, 6)

const defaultFn = (arg: string = 'f') => arg
defaultFn()
defaultFn(undefined)
defaultFn(5)
defaultFn(null)
defaultFn().toUpperCase()
defaultFn(5).toUpperCase()

const acceptsStringOrNumber = (arg: string | number) => {}
acceptsStringOrNumber('djdj')
acceptsStringOrNumber(5)
acceptsStringOrNumber([true])

const obj: { name: string, age: number } = { name: 'faiyaz', age: 20 }
obj.name = 20

const obj2: {| city: string |} = {city: 'Mumbai', country: 'India'}
