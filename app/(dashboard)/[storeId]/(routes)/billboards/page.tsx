
import { BillboardClient } from "./components/client";

const Billboards = () => {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
            Billboards
            <BillboardClient />
        </div>
        </div>
    )
}

export default Billboards

