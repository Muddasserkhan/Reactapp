import React, { useEffect, useState } from 'react'

const Fetchapi = () => {

    const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.publicapis.org/entries").then((result)=>{
    //         result.json().then((response)=>{
    //             // console.warn("Result", response);
    //             setData(response);
    //         })
    //     })
    // },[])

    useEffect(() => {
        fetch("https://api.publicapis.org/entries")
            .then((result) => {
                result.json().then((response) => {
                    // Check if the response is an array before setting the state
                    if (Array.isArray(response.entries)) {
                        setData(response.entries);
                    } else {
                        console.error("Invalid API response format. Expected an array.");
                    }
                })
                .catch((error) => {
                    console.error("Error parsing JSON:", error);
                });
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);
    
    return (
        <>
            <div className="container">
                <table className='border'>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.API}</td>
                            <td>{item.Description}</td>
                            <td>{item.Auth}</td>
                            <td>{item.HTTPS}</td>
                            <td>{item.Cors}</td>
                            <td>{item.Link}</td>
                            <td>{item.Category}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}

export default Fetchapi
