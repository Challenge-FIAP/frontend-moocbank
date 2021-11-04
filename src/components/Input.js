import React, {useState} from 'react'

const Input = ({label, ...rest}) => {
  const [touched, setTouched] = useState(false)

  return(
    <>
      <label htmlFor={rest.name}>{label}</label>
      <input type={rest.type ? rest.type : 'text'} className="form-control" {...rest} onBlur={() => setTouched(true)}></input>
    </>
  )
}

export default Input