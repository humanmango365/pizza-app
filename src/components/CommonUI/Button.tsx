import React, { FC } from 'react'

type ButtonType = {
  outline?: true,
  onClick?: () => void,
  className?: string
}

const Button: FC<ButtonType> = (props) => {
  return (
    <button onClick={props.onClick} className={`button ${props.outline ? 'button--outline' : ''} ${props.className}`}>
      {props.children}
    </button>
  )
}

export default Button
