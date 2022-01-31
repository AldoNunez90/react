import "./styles.css"

const Contact = ()=> {
return (

    <form action="#" className="formContact">
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" placeholder="Nombre" />
        <label htmlFor="mail">Correo:</label>
        <input type="text" id="mail" placeholder="E-mail" />
        <label htmlFor="message">Mensaje:</label>
        <input type="text" name="" id="message" placeholder="Su mensaje" />
        <button type="submit" className="sendBtn">Enviar</button>
    </form>

)
}

export default Contact