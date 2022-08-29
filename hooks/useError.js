import { useState } from "react"

export default function useError() {
    const [Error, setError] = useState(false);
    const [mensagemError, setMensagemError] = useState("");

    function isValid(){
        setError(false);
    }

    function isError(){
        setError(true);
    }

    function setMensagem(msg){
        isError();
        setMensagemError(msg);
    }

    return[
        Error,
        mensagemError,
        isValid,
        setMensagem
    ]
}