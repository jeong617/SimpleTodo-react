import Button from '@mui/material/Button';

const ToDoInput = (props) => (
    <form onSubmit={props.handleSubmit}>
        <input type="text" value={props.inputBox} onChange={props.handleChange} placeholder='할 일을 입력하세요!' />
        <Button type="submit">추가</Button>
        {/* <button type="submit">추가</button> */}
    </form>
)

export default ToDoInput;