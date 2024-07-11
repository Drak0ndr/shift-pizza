export const sendPayment = async (data) => {
    const responce = await fetch("https://shift-backend.onrender.com/pizza/payment", {
        method: "Post",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    }).then((response) => response.json())

    return responce
}
