const __BASE_URL = 'http://localhost:7777';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDIsIm5hbWUiOiJKZWFuIGJvbiIsImVtYWlsIjoiamVhbmJvbkBnbWFpbC5jb20iLCJwYXNzd29yZCI6ImNvdWNvdSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NzgxODE4OTcsImV4cCI6MTcwOTczOTQ5N30.K60dpFuwSdGuAmEjBjcgOO5BnB98x7Q9rMV6IXCYo_4'
const __HEADERS = {
    headers: {
        'Authorization': `Bearer ${token}`
    }
}

export const getCoursApi = async () => {
    const response = await fetch(__BASE_URL, __HEADERS).then((res) => {
        return res.json();
    });
    //console.log(response.contacts);
    return response.contacts;
}

export const postCoursApi = async (contact) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(contact)
    }
    console.log(options)
    const response = await fetch(__BASE_URL, options).then((res) => {
        return res.json();
    });
    console.log(response.contacts);
    return response.contacts;
}