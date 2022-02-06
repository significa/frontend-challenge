import { IconProps } from "../../interfaces/icon";

export default function Heart(props: IconProps) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <title>icon-heart-white</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Styleguide-presentation" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="8.icons" transform="translate(-530.000000, -344.000000)">
                    <g id="icon-heart-white" transform="translate(530.000000, 344.000000)">
                        <rect id="Rectangle-13" x="0" y="0" width="24" height="24"></rect>
                        <path d="M12,5.7384007 C24.3159972,-3.87751835 26.3133219,14.4898505 12,20 C-2.31332192,15.570284 -0.31599724,-3.87751835 12,5.7384007 Z" fill={props.fill} id="Rectangle-12" stroke="#FFFFFF" strokeWidth="2"></path>
                    </g>
                </g>
            </g>
        </svg>
    )
}