import { useState } from "react";
import CreateProductDialog from "./components/CreateProductDialog";

export default function Selling() {
    const [open, setOpen] = useState(false);
    return (
        <div className="w-full text-center">
            <button onClick={() => setOpen(true)} className="border px-2 py-2 rounded bg-red-500 text-white">Request A Valuation</button>
            <CreateProductDialog
                open={open}
                setOpen={setOpen}
            />
        </div>
    )
}
