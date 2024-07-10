const sendOtp = async (phone) => {
    const responce = await fetch("https://shift-backend.onrender.com/auth/otp", {
        method: "Post",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({phone:phone})
    }).then((response) => response.json())
    
    if (responce.success) {
        setHaveOtp(true)
    }
}

export {sendOtp}