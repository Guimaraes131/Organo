import styles from "./InputText.module.css"

const InputText = ({ label, placeholder, value, onChange }) => {
  return (
    <div className={styles.inputText}>
      <label>{label}</label>
      <input value={value} onChange={onChange} type="text" placeholder={placeholder} />
    </div>
  )
}

export default InputText