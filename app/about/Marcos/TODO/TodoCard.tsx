import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { Tarea } from "@/db/schemas/tabla_marcos"

interface TodoCardProps {
    task: Tarea;
    onComplete: (id: number) => void;
    onDelete: (id: number) => void;
}

export function TodoCard({ task, onComplete, onDelete }: TodoCardProps){
    return(
        <li key={task.id} className="flex items-center justify-between text-black">
            <div className="flex items-center space-x-2">
            <Checkbox
                id={`checkbox-${task.id}`}
                className="w-6 h-6"
                checked={task.done ?? false}
                onCheckedChange= {() => onComplete(task.id)}
            />
            <div className="leading-none">
                <label
                htmlFor={`checkbox-${task.id}`}
                className="text-lg font-medium"
                >
                {task.tarea}
                </label>
            </div>
            </div>
            <Button variant="ghost" onClick={() => onDelete(task.id)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-red-600"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
                />
            </svg>
            </Button>
        </li>
    )
}