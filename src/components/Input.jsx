const Input = (props) => {
    let placeholder = props.placeholder ;
  return (
    <div>
        <input type="text" placeholder={placeholder} />
    </div>
  )
}

export default Input