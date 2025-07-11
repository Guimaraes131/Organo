import { useState } from "react"
import Button from "../Button"
import InputText from "../InputText"
import SelectInput from "../SelectInput"
import styles from "./Form.module.css"

const Form = () => {

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [group, setGroup] = useState('');

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(name, role, image, group)
  }

  return (
    <div className={styles.form}>

      <form>
        <h1>Fill in the information to create the employee card.</h1>

        <InputText
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Name"
          placeholder="Type your name"
        />

        <InputText
          value={role}
          onChange={(e) => setRole(e.target.value)}
          label="Role"
          placeholder="Type your role"
        />

        <InputText
          value={image}
          onChange={(e) => setImage(e.target.value)}
          label="Image"
          placeholder="Image URL"
        />

        <SelectInput
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          label="Group"
        />

        <Button onClick={onSubmit}>Create Card</Button>
      </form>
    </div>
  )
}

export default Form