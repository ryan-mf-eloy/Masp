'use client'
import { useState, useCallback, ChangeEvent } from 'react'

export interface IInputOnChangeParams {
  checked: boolean,
  inputValue: string
}

export default function InputCheckbox({
  labelClassName,
  id,
  value,
  labelText,
  onChange,
  isChecked
}: {
  labelClassName?: string,
  labelText: string,
  id: string,
  value: string,
  isChecked?: boolean
  onChange?: (event: IInputOnChangeParams) => void
  }) {
  const [checked, setChecked] = useState(isChecked)

  const handleChange = useCallback((
    data: { target: { value: string } } | ChangeEvent<HTMLInputElement>
  ) => {
    setChecked(!checked)
 
    if (onChange) {
      onChange({ checked: !checked, inputValue: data.target.value })
    }
  }, [checked, setChecked, onChange])
  
  return (
      <div className="inline-flex items-center">
        <label className="relative flex items-center p-3 cursor-pointer" htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          value={value}
          checked={checked}
          onChange={(event) => handleChange(event)}
          className="before:content[''] checked:bg-primary checked:border-primary peer relative h-8 w-8 cursor-pointer appearance-none border-2 border-gray-900/20 bg-gray-900/10 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:before:bg-gray-900 hover:scale-105 hover:before:opacity-0" />
        
          <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path></svg>
          </span>
      </label>

      <span
        onClick={() => handleChange({ target: { value } })}
        className={`select-none cursor-pointer ${labelClassName}`}
      >
        {labelText}
      </span>
    </div>
  )
}