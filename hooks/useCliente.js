import { useContext } from "react";
import clienteContext from "../context/clienteContext";

export default function useCliente(){
    return useContext(  clienteContext );   
}