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
    color?: string
    size?: string
}


const Input = ({label, id, name, value, className, onChange, checked, type, color, size} : InputProps) => {

  return (
    <div className={`input ${className}`}>
      <label htmlFor={id} className={`label ${color}`}>{label}</label>
      <input type={type} id={id} name={name} value={value} onChange={onChange} checked={checked} className={`${size}`}/>
    </div>
  )
}

export default Input
