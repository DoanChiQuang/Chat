
const Input = ({
    value,
    placeholder,
    onChange = () => {},
    startIconElement,
    endIconElement,
    className,
}) => {
    return (
        <div className={`flex justify-center items-center rounded-lg p-3 space-x-3 bg-gray-200 text-gray-500 ${className}`}>
            {startIconElement && startIconElement}
            <input value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)}  className="w-full bg-transparent outline-none" />
            {endIconElement && endIconElement}
        </div>
    );
};

export default Input;