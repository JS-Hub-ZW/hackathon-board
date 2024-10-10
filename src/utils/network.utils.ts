import { RequestMethod } from "@/types/types";

export const requestData = async (url:string, method:RequestMethod, data?:any) => {

    let res

    if (method === 'GET') {
        res = await fetch(url);
        res = await res.json();
    }

    if (method === 'POST') {
        res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        });

        res = await res.json();
    }

    if (method === 'PUT') {
        res = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data)
        });

        res = await res.json();
        
    }

    if (method === 'DELETE') {
        res = await fetch(url, {
            method: 'DELETE'
        });

        res = await res.json();
        
    }

    if (res){
        return res;
    }else{
        return null;
    }
}

