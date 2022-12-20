const Input = (props) => {
    return (
      <div class="form-outline">
        <input type="number" className="form-control"  />
        <label className="form-label" for="typeNumber">{props.text}</label>
      </div>
    )
}
export default Input;