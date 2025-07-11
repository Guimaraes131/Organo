import styles from "./InputText.module.css"

const InputText = ({ label, placeholder }) => {
  return (
    <div className={styles.inputText}>
      <label>{label}</label>
      <input type="text" placeholder={placeholder} />
    </div>
  )
}

export default InputText