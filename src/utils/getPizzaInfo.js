 export const getPizzaInfo = pizza => {
    let ans = `${pizza.name}, ${pizza.size.name}, ${pizza.doughs.name}`
    if (pizza.toppings.length > 0) {
        ans += " + "
        pizza.toppings.forEach(item => {
            ans += item.name + " "
        })
    }
    return ans
}
