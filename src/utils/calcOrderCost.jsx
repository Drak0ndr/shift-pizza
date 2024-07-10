const calcOrderCost = pizzas => {
    console.log(pizzas)
    let ans = 0
    pizzas.forEach(pizza => {
        ans+=(pizza.size.price + pizza.doughs.price) * pizza.count
        if (pizza.toppings.length > 0) {
            ans += pizza.toppings.reduce((accumulator, current) => accumulator + current.cost * pizza.count, 0)
        }
    })

    return ans
}

export {calcOrderCost}