interface LabelProps {
    className: string;
    image?: string;
    text?: string;
}

export default function Label({ className, image, text }: LabelProps) {
    return (
        <div className={className}>
            <div className="logo">
                <div className="logo">
                    <img src={image} alt="logo" />
                </div>
            </div>
            <div className="rating">
                <h4>
                    {text}
                </h4>
            </div>
        </div>
    )
}