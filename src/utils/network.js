export const requestData = async (url, method, data) => {

    let data

    if (method === 'GET') {
        let res = await fetch(url);
        data = await res.json();
    }

    if (method === 'POST') {
        let res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        });

        data = await res.json();
    }

    if (method === 'PUT') {
        let res = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data)
        });

        data = await res.json();
        
    }

    if (method === 'DELETE') {
        let res = await fetch(url, {
            method: 'DELETE'
        });

        data = await res.json();
        
    }

    if (data){
        return data;
    }else{
        return null;
    }
}

