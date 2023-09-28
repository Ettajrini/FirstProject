
// la methode gerer les formulaire non controlle
// function QuestionForm(){
//     function handleSubmit(e) {
//         e.preventDefault()
//         alert(e.target['my_input'].value)
//     }
//
//     return (<form onSubmit={handleSubmit}>
//         <input type='text' name='my_input' defaultValue='Tapez votre texte' />
//         <button type='submit'>Entrer</button>
//     </form>);
// }
import { useState } from 'react'

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    return (
        <div>
    <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
    />
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
        </div>
    )
}


export default QuestionForm