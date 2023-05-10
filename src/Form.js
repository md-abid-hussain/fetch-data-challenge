import Button from "./Button"
const Form = ({ currentData, setCurrentData }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <Button
                buttonText={'users'}
                currentData={currentData}
                setCurrentData={setCurrentData}
            />
            <Button
                buttonText={'posts'}
                currentData={currentData}
                setCurrentData={setCurrentData}
            />
            <Button
                buttonText={'comments'}
                currentData={currentData}
                setCurrentData={setCurrentData}
            />
        </form >

    )
}

export default Form