export default function TextInput({value, setValue}) {
    

    return (
        <div>
            <label htmlFor="title">Título:</label>
            <input
                type="text"
                name="title"
                id="title"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}