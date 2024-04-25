import { SendIcon } from "../Icon";

const Button = ({
    onClick = () => {},
}) => {
    return (
        <div>
            <button onClick={onClick} className="bg-[#039a7d] rounded-lg p-3 text-white"><SendIcon /></button>
        </div>
    );
};

export default Button;