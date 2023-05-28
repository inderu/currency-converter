import { Dispatch, SetStateAction } from 'react';
import './CurrencyInput.css';

type Props = {
    value: number,
    onValueChange?: Dispatch<SetStateAction<number>>,
    code: string,
    onCodeChange: Dispatch<SetStateAction<string>>,
    currencies: Array<{
        code: string,
        name: string
    }>,
    label: string,
    disableInput?: boolean,
}

function CurrencyInput(props: Props) {
    return <div className='currency-input'>
        <label className='currency-label'>{props.label}</label>
        <div className='input-wrapper'>
            <input
                className="currency-number"
                type="text"
                inputMode='numeric'
                pattern='^\d*\.?\d*$'
                value={props.value}
                onInput={value => props.onValueChange && props.onValueChange(+value.currentTarget.value)}
                aria-disabled={props.disableInput} />
            <div className='select-wrapper'>
                <select
                    className='currecy-selector'
                    value={props.code}
                    onChange={event => props.onCodeChange(event.target.value)}>
                    {props.currencies.map(curr => (
                        <option value={curr.code} key={curr.code}>{curr.name}</option>
                    ))}
                </select>
            </div>
        </div>
    </div>;
}

export default CurrencyInput;
