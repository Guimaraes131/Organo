import Button from "../Button"
import InputText from "../InputText"
import SelectInput from "../SelectInput"
import styles from "./Form.module.css"

const Form = () => {
  return (
    <div className={styles.form}>

      <form>
        <h1>Fill in the information to create the employee card.</h1>

        <InputText label="Name" placeholder="Type your name"/>
        <InputText label="Role" placeholder="Type your role"/>
        <InputText label="Image" placeholder="Image URL"/>
        <SelectInput label="Group"/>

        <Button>Create Card</Button>
      </form>
    </div>
  )
}

export default Form