export const updateProfile = async (token, name, middleName, surname, email, addres, phone) => {
    const responce = await fetch(
        "https://shift-backend.onrender.com/users/profile", {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({profile:{firstname:name, middlename:middleName, lastname:surname, email:email, city:addres}, phone: phone})
        }
    ).then((responce) => responce.json())

    console.log(responce)
    return responce
}