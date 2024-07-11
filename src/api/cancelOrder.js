export const cancelOrder = async (token, id) => {
    const responce = await fetch(
        "https://shift-backend.onrender.com/pizza/orders/cancel", {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({orderId: id,})
        }
    ).then((responce) => responce.json())

    return responce
}
