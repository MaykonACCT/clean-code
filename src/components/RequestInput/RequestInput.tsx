import { useState } from 'react'
import { useUserContext } from '../../contexts/userContext'
import { useParameters, handleRequestButton } from '../../hooks'
import { Icon } from '../Icon'
import './styles.css'

function RequestInput() {
    const [inputText, setInputText] = useState<string>('')
    const { setUser } = useUserContext()
    const { isActive, hasIcon, isFontSansSerif, text } = useParameters({
        text: inputText
    })


    return (
        <div className='RequestGroup'>
            <input type='text' placeholder='Username' onChange={(element) => setInputText(element?.target?.value)}/>
            <button onClick={() => handleRequestButton(text, setUser)} disabled={!isActive} style={{fontFamily: isFontSansSerif ? 'sans-serif' : 'serif'}}>
                {hasIcon && <Icon />}
                Buscar
            </button>
        </div>
    )
}

export default RequestInput