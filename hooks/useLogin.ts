"use clinet"

import { useState } from "react"

export default function useLogin(){
    const [loading, setLoading] = useState(false);
    
    const PassUser = () => {
        const response = fetch(`{API_URL}`), {
            method: "POST"
            headers: {
                'Content-Type': 'application/json',
            }, 
            body:{
                
            }
        }
    }
 
    return()
}