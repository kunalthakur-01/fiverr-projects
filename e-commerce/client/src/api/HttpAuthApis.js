
export const HttpLogin = async (body, abortController) => {
    const response = await fetch('http://localhost:3000/api/auth/login', {
        method: "POST",
        body: JSON.stringify({ ...body }),
        headers: {
            "Content-Type": "application/json"
        },
        signal: abortController.signal
    });

    const data = await response.json();
    
    if (!response.ok) throw Error(data.message);

    return data;
};

export const HttpSignup= async (body, abortController) => {

    const formData = new FormData();
    formData.append('email', body.email);
    formData.append('name', body.name);
    formData.append('password', body.password);
    formData.append('image', body.image);

    const response = await fetch('http://localhost:3000/api/auth/signup', {
        method: "POST",
        body: formData,
        signal: abortController.signal
    });

    // const response = await fetch('http://localhost:3000/api/auth/signup', {
    //     method: "POST",
    //     body: JSON.stringify({ ...body }),
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     signal: abortController.signal
    // });

    const data = await response.json();
    
    if (!response.ok) throw Error(data.message);

    return data;
};