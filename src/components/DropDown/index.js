

import { useState, useCallback } from 'react';
import { defaultInpStyle, dropDownStyle, optionsWrapStyle, optionStyle } from 'components/DropDown/style.js'

export default ({
    title='Choose Option',
    InputComponent = ()=> title,
    type='radio',
    style,
    options = [],
    selectedValues,
    onChange
}) => {
    const [isOpen, setIsOpen] = useState(false)
    if (!Array.isArray(selectedValues)) {
        selectedValues = [selectedValues]
    }
    const handleDropDown = useCallback(() => {
        setIsOpen(!isOpen)
    }, [isOpen])

    const handleOptionClick = useCallback((newKey) => {
        if (type === 'radio') {
            let newValue = newKey
            if (selectedValues.includes(newKey)) {
                newValue = ''
            } 
            onChange(newKey)
            setIsOpen(false)
        } else if (type === 'checkbox'){
            let newValues
            if (selectedValues.includes(newKey)) {
                newValues = selectedValues.filter((key) => newKey !== key)
            } else {
                selectedValues.push(newKey)
                newValues = [...selectedValues]
            }
            onChange(newValues)
        }
    }, [selectedValues, type])
    
    return (
    <div css={dropDownStyle, style}> 
        <div css={defaultInpStyle(isOpen)} onClick={handleDropDown}><InputComponent/></div>
        {isOpen && (
        <div css={optionsWrapStyle} className='option-wrapper'>
            {options.map(({key, label})=>(
            <div key={key} 
                 css={optionStyle(selectedValues.includes(key))}
                 className='option'
                 onClick={() => handleOptionClick(key)}>
                     {label}
            </div>))}
        </div>
        )}
       
    </div>)
}