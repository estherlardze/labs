import React from 'react'
import './Input.css'
interface InputProps {
    label: string
    id: string
    name: string
    value: string
    className?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    type?: 'text' | 'date' | 'select'
}


const Input = ({label, id, name, value, className, onChange} : InputProps) => {

  return (
    <div className={`input ${className}`}>
      <label htmlFor={id} className='label'>{label}</label>
      <input type="text" id={id} name={name} value={value} onChange={onChange} />
    </div>
  )
}

export default Input
