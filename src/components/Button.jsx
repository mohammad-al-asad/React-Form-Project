import styles from "../css/button.module.css"
const Button = ({text,icon,isTransparent, ...rest}) => {
  return (
    <div>
        <button {...rest} className={isTransparent? styles.transparentBtn : styles.btn}>{icon}{text}</button>
    </div>
  )
}

export default Button