import styles from "./SelectInput.module.css"

const groups = [
  "Back-End",
  "Front-End",
  "DevOps",
  "UX & Design"
]

const SelectInput = ({ label }) => {
  return (
    <div className={styles.selectInput} >
      <label>{label}</label>
      <select>
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