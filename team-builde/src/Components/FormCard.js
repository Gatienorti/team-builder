import React from 'react'



export default function FormCard(props){
const {data} = props

if(!data) return
return(
    <div className='cardContainer'>
        <h3>{data.name}</h3>
        <p>Email: {data.email}</p>
        <p>Speciality: {data.role}</p>
    </div>
)
}