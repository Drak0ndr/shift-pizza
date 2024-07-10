const authorization = async (phone, otp) => {
    const responce = await fetch("https://shift-backend.onrender.com/users/signin", {
        method: "Post",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({phone:phone, code:otp})
    }).then((response) => response.json())

    return responce
}

export {authorization}