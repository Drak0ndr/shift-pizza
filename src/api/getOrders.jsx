const getOrders = async (token) => {
    const responce = await fetch(
        "https://shift-backend.onrender.com/pizza/orders", {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json;charset=utf-8'
            }
        }
    ).then((responce) => responce.json())

    return responce
}

export {getOrders}