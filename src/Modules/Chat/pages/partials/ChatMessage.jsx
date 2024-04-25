import Button from '../../components/Button';
import { TrashIcon } from '../../components/Icon';
import Input from '../../components/Input';
import List from '../../components/List';

const ChatMessage = ({
    myId,
    friendId,
    tooltipId,
    friendData,
    onDeleteChat,
    onDeleteMessage,
    onShowMenuMessage,
    onSendMessage,
    message, 
    setMessage,
}) => {
    const renderItem = ({ item, index }) => {
        return (
            <div key={index}>
                {index == 0 && <div className="h-screen" />}
                <div
                    className={`flex flex-col relative cursor-pointer ${
                        (item.userId == myId && 'items-end') ||
                        (item.userId == friendId && 'items-start')
                    }`}
                    onContextMenu={(event) => onShowMenuMessage(event, item.id)}
                >
                    <div
                        className={`px-4 py-2 rounded-full ${
                            (item.userId == myId &&
                                'bg-[#039a7d] text-white') ||
                            (item.userId == friendId && 'bg-gray-200')
                        }`}
                    >
                        {item.message}
                    </div>
                    {tooltipId == item.id && (
                        <div className="bg-gray-500 absolute -top-12 rounded">
                            <div className="hover:bg-gray-400 cursor-pointer px-2 py-1 m-1 rounded-sm text-white" onClick={() => onDeleteMessage(item.id)}>
                                {item.userId == myId && "Thu hồi tin nhắn" || item.userId == friendId && "Xóa tin nhắn ở phía bạn"}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="flex justify-between items-center p-4">
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <img
                            src={friendData.avatar}
                            className="w-10 h-10 rounded-full bg-black"
                        />
                        <div className="absolute bottom-0 left-7 w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <div>
                        <div className="text-lg font-bold">
                            {friendData.fullname}
                        </div>
                        <div className="text-sm font-medium text-gray-500">
                            Active Now
                        </div>
                    </div>
                </div>
                <div
                    className="hover:bg-gray-200 rounded-lg cursor-pointer p-3"
                    onClick={() => onDeleteChat(friendData.chatId)}
                >
                    <TrashIcon className={'w-12 h-12'} />
                </div>
            </div>
            <List
                data={friendData.chats}
                renderItem={renderItem}
                className={'grow space-y-2 p-4 border-t-2'}
                scrollToBottom
            />
            <div className="flex space-x-2 p-4 border-t-2">
                <Input value={message} onChange={(value) => setMessage(value)} className={'grow'} placeholder={'Type something...'} />
                <Button onClick={() => onSendMessage(myId, message)} />
            </div>
        </>
    );
};

export default ChatMessage;
