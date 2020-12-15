import React from 'react'


export default function Form(props){
    const{ values, update, submit } = props

    
    return(
        <form className='form container' onSubmit={submit}>
            <div className='form-inputs'>
                <label>Name
                    <input
                    value={values.name}
                    type='text'
                    name='name'
                    onChange={update}
                    placeholder="Type Name"
                    maxLength='25'
                    />
                </label>
                <label>Email
                    <input
                    value={values.email}
                    type='email'
                    name='email'
                    onChange={update}
                    placeholder="Type Email"
                    maxLength='25'
                    />
                </label>
                <label>Role
                    <select onChange={update} name='role' value={values.role}>
                        <option value=''>-- Select a Role --</option>
                        <option value='full-stack'>Full Stack</option>
                        <option value='back_end'>Back End</option>
                        <option value='front_end'>Front End</option>
                    </select>
                </label>
                <button>Add!</button>
            </div>
        </form>

    )
}