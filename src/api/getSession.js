export const getSession = async (token) => {
    const responce = await fetch(
        "https://shift-backend.onrender.com/users/session", {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json;charset=utf-8'
            }
        }
    ).then((responce) => responce.json())

    return responce
}