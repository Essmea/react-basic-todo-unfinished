//importerar useState för att kunna registrera olika states vi vill använda i vår applikation. React kommer då reagera på ändringar i den specifika 'staten' och låter oss som utvecklare rendera olika saker beroende på vilken state som är aktiv.
import {useState} from 'react'; 
import Backdrop from './Backdrop';
import Modal from './Modal'

//Starta namnet med stor bokstav.
function Todo(props) { //Props är objekt inom komponenten med ett textproperty med olika värden, måste inte heta props men är ett vanligt namn.
   
    /*Vi kallar på useState() i vår Todo funktion. useState() returnerar alltid en array med 2 element. 
    Array destructuring för att förvara de två olika elementen i olika const. 
    Vi får tillgång till useStates nuvarande värde (false) i vår första const 'modalIsOpen', vår andra const 'setModalIsOpen' är en funktion som ger useState() ett nytt värde.*/
    const [ modalIsOpen, setModalIsOpen ] = useState(false); 

    function deleteHandler() { //Denna funktion sätter vi sedan i onClick eventlistenern, men vi använder inte () efter funktionen eftersom vi inte ska utföra funktionen direkt. Istället utförs funktionen av react när knappen blir klickad på.
        setModalIsOpen(true); //Vi kallar på vår andra const funktion i useState() 'setModalIsOpen' och ändrar vårt värde till (true).
    };

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
    <div className="card"> 
        <h2>{props.text}</h2>
        <div className="actions"> 
            <button className="btn" onClick={deleteHandler}>
                Delete
            </button> 
        </div>
        { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
        { modalIsOpen && <Backdrop onCancel={closeModalHandler}/>} 
    </div>
    );
}

export default Todo; //Vi exporterar Todo för att vi ska kunna använda funktionen utanför denna filen. 