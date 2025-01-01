import React from 'react'
import './Input.css'
interface InputProps {
    label: string
    id: string
    name?: string
    value?: string
    checked?: boolean
    className?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    type?: string
}


const Input = ({label, id, name, value, className, onChange, checked, type} : InputProps) => {

  return (
    <div className={`input ${className}`}>
      <label htmlFor={id} className='label'>{label}</label>
      <input type={type} id={id} name={name} value={value} onChange={onChange} checked={checked} />
    </div>
  )
}

export default Input
