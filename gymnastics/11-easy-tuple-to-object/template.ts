type TupleToObject<T extends readonly (number | string | symbol)[]> = {
    [P in T[number]] : P
}


const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type myObj = TupleToObject<typeof tuple>