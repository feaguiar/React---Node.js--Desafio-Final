import { useState } from "react"

export default function useWindow() {
    const [open, setOpen] = useState(false);

    function onClose(){
        setOpen(false);
    }
    function onOpen(){
        setOpen(true);
    }

    return[
        open,
        onClose,
        onOpen
    ]
}