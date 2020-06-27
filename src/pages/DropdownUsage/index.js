import {  wrapperStyle } from 'pages/DropdownUsage/style.js'
import Radio from 'components/Radio'
import Checkbox from 'components/Checkbox'

function DropdownUsage () { 
    return (
        <div css={wrapperStyle}>
          <Radio /> 
          <Checkbox />
        </div>
    )
}

export default DropdownUsage