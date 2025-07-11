import InputText from "../InputText"
import SelectInput from "../SelectInput"

const Form = () => {
  return (
    <div>
      <form>
        <InputText label="Name" placeholder="Type your name"/>
        <InputText label="Role" placeholder="Type your role"/>
        <InputText label="Image" placeholder="Image URL"/>
        <SelectInput label="Group"/>
      </form>
    </div>
  )
}

export default Form