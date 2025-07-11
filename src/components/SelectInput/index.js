import styles from "./SelectInput.module.css"

const groups = [
  "Back-End",
  "Front-End",
  "DevOps",
  "UX & Design"
]

const SelectInput = ({ label, value, onChange }) => {
  return (
    <div className={styles.selectInput} >
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        <option disabled></option>

        {groups.map(
          group =>
            <option value={group} key={group}>{group}</option>
          )
        }

      </select>
    </div>
  )
}

export default SelectInput