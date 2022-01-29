import react, {useState} from "react";
import './ToolBar.scss';

import {ChromePicker} from 'react-color'

function ToolBar({color, setColor, background, setBackground}) {

    const [open, setOpen] = useState(false);

    return (
        <div className="ToolBar">
            <button
                className="ToolBar__Button"
                onClick={() => setOpen(!open)}
            >
                {open ? 'Close Menu' : 'Open Menu'}
            </button>
            {open && 
                <div className="ToolBar__Inner">
                    <ChromePicker 
                        color={color}
                        onChange={color => setColor(color.hex)}
                        disableAlpha ={true}
                    />
                </div>
            }
        </div>
    )
}

export default ToolBar