import { useUserContext } from '../../contexts/userContext'
import { useParameters, handleRequestButton } from '../../hooks'
import { Icon } from '../Icon'
import './styles.css'

function RequestInput() {
    const { setUser } = useUserContext()
    const { isActive, hasIcon, isFontSansSerif, text } = useParameters({
        text: 'Banana'
    })


    return (
        <div className='RequestGroup'>
            <button onClick={() => handleRequestButton(text, setUser)} disabled={!isActive} style={{fontFamily: isFontSansSerif ? 'sans-serif' : 'serif'}}>
                {hasIcon && <Icon />}
                {text}
            </button>
        </div>
    )
}

export default RequestInput