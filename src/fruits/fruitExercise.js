import foods from '../foods'
import {choice, remove} from '../helpers';

let food = choice(foods)
console.log(`i'd like one ${food}, please`)
console.log(`here you go ${food}`)

let remaining = remove(foods, food)
console.log(foods.length)

console.log(`i'm sorry, we're all out.  we have ${remaining} left`)