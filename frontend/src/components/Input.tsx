import { ChangeEvent, FC } from "react";

interface InputProps {
    tag: 'input' | 'textarea' | 'select'; // Restrict tag types to valid HTML elements
    label: string;
    id: string;
    name: string;
    value: string | number;
    type?: string; // Optional, applies only to 'input'
    isRequired?: boolean;
    className?: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const Input: FC<InputProps> = ({
    tag,
    label,
    id,
    name,
    value,
    type = "text",
    isRequired = false,
    className = "",
    onChange
}) => {
    const commonProps = {
        id,
        name,
        value,
        onChange,
        className: `w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 text-black ${className}`,
        required: isRequired,
    };

    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium mb-1">{label}</label>
            {tag === "input" && <input type={type} {...commonProps} />}
            {tag === "textarea" && <textarea {...commonProps} />}
            {tag === "select" && <select {...commonProps}></select>}
        </div>
    );
};

export default Input;
