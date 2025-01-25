import PropTypes from 'prop-types'
import React from 'react'

const Button = ({item,className}) => {
  return (
    <button className={`${className} w-fit border-[2px] rounded-full tracking-widest flex items-center gap-4 p-6 text-xs text-heading-default uppercase  `}>
      {item}
    </button>
  )
}

Button.propTypes = {
    item:PropTypes.object.isRequired
}

export default Button