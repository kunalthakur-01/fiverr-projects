
// fetching and deleting cart's item apis
export const addToCart = async (body) => {
    const response = await fetch('http://localhost:3000/api/cart', {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        },
    });

    const data = await response.json();
    // console.log(data);

    if (!response.ok) throw Error(data.message);

    return data;
};

export const getcart = async (userId) => {
    const response = await fetch(`http://localhost:3000/api/cart/${userId}`);

    const data = await response.json();
    // console.log(data);

    if (!response.ok) throw Error(data.message);

    return data;
};

export const deleteItemFromCart = async (body) => {
    const response = await fetch('http://localhost:3000/api/cart', {
        method: "DELETE",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        },
    });

    const data = await response.json();
    console.log(data);

    if (!response.ok) throw Error(data.message);

    return data;
};




// fetching products apis
export const getAllProducts = async () => {
    const response = await fetch('http://localhost:3000/api/products');

    const data = await response.json();
    // console.log(data);

    if (!response.ok) throw Error(data.message);

    return data;
};

export const getProduct = async (pid) => {
    const response = await fetch(`http://localhost:3000/api/products/${pid}`);

    const data = await response.json();
    // console.log(data);

    if (!response.ok) throw Error(data.message);

    return data;
};


// add user's product
export const addUserProduct= async (body, abortController, userId, token) => {

    const formData = new FormData();
    formData.append('name', body.name);
    formData.append('mrp', body.mrp);
    formData.append('price', body.price);
    formData.append('category', body.category);
    formData.append('brand', body.brand);
    formData.append('madeIn', body.madeIn);
    for (let i = 0; i < body.images.length; i++) {      
        formData.append('images', body.images[i]);
    }

    const response = await fetch(`http://localhost:3000/api/products/${userId}`, {
        method: "POST",
        body: formData,
        headers: {
            "Authorization": "Bearer " + token
        },
        signal: abortController.signal
    });

    const data = await response.json();
    // console.log(data);
    
    if (!response.ok) throw Error(data.message);

    return data;
};

// delete user's product
export const deleteProduct = async (body, abortController) => {
    const response = await fetch('http://localhost:3000/api/products', {
        method: "DELETE",
        body: JSON.stringify({userId: body.userId, prodId: body.prodId}),
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + body.token
        },
        signal: abortController.signal
    });

    const data = await response.json();
    console.log(data);

    if (!response.ok) throw Error(data.message);

    return data;
};

