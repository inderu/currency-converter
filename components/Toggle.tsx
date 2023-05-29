import { Dispatch, SetStateAction, useRef } from 'react';
import './Toggle.css';

type Props = {
    isChecked: boolean,
    onChange: Dispatch<SetStateAction<boolean>>,
    label?: string,
}

function Toggle(props: Props) {
    const id = useRef('toggle-id-');
    return (<div className='toggle-wrapper'>
        <div className='toggle-label' id={id.current}>{props.label}</div>
        <label className='toggle'>
            <input
                aria-describedby={id.current}
                type="checkbox"
                checked={props.isChecked}
                onChange={() => props.onChange(prev => !prev)}
                role="slider" />
            <span className='slider' />
        </label>
    </div>);
}

export default Toggle;
