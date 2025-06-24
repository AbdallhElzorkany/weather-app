import { LoaderCircle } from "lucide-react";
export default function Loading() {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <LoaderCircle className="animate-spin text-neutral-400 size-20" />
        </div>
    );
}