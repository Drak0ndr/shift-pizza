const getPizzas = async () => {
    const response = await fetch(
        "https://shift-backend.onrender.com/pizza/catalog"
    ).then((response) => response.json())

    return response
}

export {getPizzas}