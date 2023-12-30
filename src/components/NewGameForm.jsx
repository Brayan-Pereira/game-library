import { useState } from "react"
import TextInput from "./TextInput"

export default function Form({ addGame, label }) {

    const [title, setTitle] = useState("")
    const [cover, setCover] = useState("")

    const handleSubmit = (ev) => {
        ev.preventDefault()
        addGame({ title, cover })

        setTitle("")
        setCover("")
    }

    return (
        <>
            <h1>{label}</h1>
            <form onSubmit={handleSubmit}>

                <TextInput value={title} setValue={setTitle} />
                <div>
                    <label htmlFor="cover">Capa:</label>
                    <input
                        type="text"
                        name="cover"
                        id="cover"
                        value={cover}
                        onChange={(e) => setCover(e.target.value)}
                    />
                </div>
                <button type="submit">Adicionar à biblioteca</button>
            </form>
        </>
    )

}