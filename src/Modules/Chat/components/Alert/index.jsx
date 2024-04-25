const Alert = ({
    visible,
    title = 'Thông báo!',
    message = 'Đây là thông báo',
    cancelText = "Hủy", 
    submitText = "Xác nhận", 
    onCancel,
    onSubmit,
}) => {
    return visible ? (
        <div className="fixed flex justify-center items-center bg-black bg-opacity-50 inset-0 z-10">
            <div className="rounded-lg px-6 py-4 bg-white space-y-3 w-96">
                <div className="font-bold text-lg">{title}</div>
                <div className="font-semibold">{message}</div>
                <div className="flex justify-end items-center space-x-3">
                    <div className="text-[#039a7d] font-medium cursor-pointer hover:bg-opacity-50" onClick={onCancel}>
                        {cancelText}
                    </div>
                    <div className="bg-[#039a7d] rounded-lg px-3 py-2 text-white cursor-pointer hover:hover:bg-opacity-80" onClick={onSubmit}>
                        {submitText}
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <></>
    );
};

export default Alert;
