async function refreshAccessToken() {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/refresh`, {
            method: 'POST',
            credentials:'include'
        });

        if(!response.ok){
            throw new Error('Refresh failed');
        }
        const data = await response.json();
        sessionStorage.setItem('accessToken', data.accessToken);
        return data.accessToken;
    } catch (err){
        sessionStorage.removeItem('accessToken');
        window.location.href = '/';
        return null;
    }
}

async function authenticatedFetch(url, options = {}) {
    let accessToken = sessionStorage.getItem('accessToken');

    const headers =  {
        'Content-type': 'application/json',
        ...options.headers,
        'Authorization': `Bearer ${accessToken}`
    };

    let response = await fetch(url,{
        ...options,
        headers,
        credentials: 'include'
    });

    if(response.status === 401){
        const data = await response.json();

        if(data.code === 'TOKEN_EXPIRED'){
            const newToken = await refreshAccessToken();
            if(newToken){
                headers['Authorization'] = `Bearer ${newToken}`;
                response = await fetch(url,{
                    ...options,
                    headers,
                    credentials: 'include'
                })
            }
        }
    }
    return response;
}

export {authenticatedFetch, refreshAccessToken}