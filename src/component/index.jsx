import React, {useState} from 'react'
import { malumot } from './malumot'
import {nanoid} from 'nanoid'

const Todo = () => {
    const [data, setData] = useState(malumot)
    const [title, setTitle] = useState('')
    const [click, setClick] = useState(null)
    const [text, setText] = useState('nmadur')

    const onsave = () => {
        
        setData([...data, {name: title, id: nanoid()}])
        setTitle('')

    }
    const ondeleted = (arg) => {
        
        setData(data.filter((v)=>v.id !== arg)) 
    }
    console.log(data);
    const onedit = (v) => {
        setClick(v.id)
        setText(v.name)
    }
    const saxranit = () => {
        
        setData(data.map((v)=>v.id ===click?{...v, name: text} : v))
        setClick(null)
    }
    console.log(data);

  return (
    <div>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <button  onClick={onsave} className='a'>add</button>
        <table width='100%' border='1'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>action</th>
                </tr>
            </thead>
            {
                data.map((v, i) => {
                    return <tbody key={v.id}>
                    <tr>
                        <td>{i + 1}</td>
                        <td width='150px'>{
                        v.id === click?
                        <input value={text} onChange={(e) =>setText(e.target.value)} type="text"/>
                        :
                        v.name
                        }</td>
                        <td>
                            <button onClick={()=>ondeleted(v.id)} className='d'>deleted</button>
                            {
                                v.id === click ?
                                <button onClick={(saxranit)} className='s'>save</button>
                                :
                                <button onClick={()=>onedit(v)} className='e'>edit</button>
                        }</td>
                    </tr>
                </tbody>
                })
            }
        </table>
    </div>
  )
}

export default Todo