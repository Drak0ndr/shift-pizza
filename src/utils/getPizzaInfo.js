import {translation } from '../components/consts'
 export const getPizzaInfo = (pizza, withName) => {
    let ans = `${translation[pizza.size.name].toLowerCase()}, ${translation[pizza.doughs.name].toLowerCase()}`
    if (withName) {
        ans = `${pizza.name}, ${ans}`
    }
    if (pizza.toppings.length > 0) {
        ans += " + "
        pizza.toppings.forEach(item => {
            ans += translation[item.name].toLowerCase() + ", "
        })
    }
    if (ans.slice(ans.length-2) == ', ') {
        ans = ans.slice(0, ans.length-2)
    }
    return ans
}
