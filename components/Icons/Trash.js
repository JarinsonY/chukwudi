import * as React from "react"

function Trash(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19 19"
            width="3rem"
            height="3rem"
            {...props}>
            <g
                fill="none"
                fillRule="evenodd"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M5.5 4.5h10v12a2 2 0 01-2 2h-6a2 2 0 01-2-2zm5-2a2 2 0 011.995 1.85l.005.15h-4a2 2 0 012-2zM3.5 4.5h14M8.5 7.5v8M12.5 7.5v8" />
            </g>
        </svg>
    )
}

export default Trash