const Label = (props, className) => {
    return (
        <label className={className} for={props.for} text={props.text}>{props.text}</label>
    )
}
export default Label;