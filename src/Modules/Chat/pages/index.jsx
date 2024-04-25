import React from 'react';
import ListMessage from './partials/ListMessage';
import ChatMessage from './partials/ChatMessage';
import useChat from '../hooks/useChat';
import Alert from '../components/Alert';

const ChatPage = () => {
    const {
        tooltipId,
        alertOption,
        friendData,
        user,
        data,
        myId,
        friendId,
        search,
        message, 
        setMessage,
        onClickChatFriend,
        onChangeSearchFriend,
        onDeleteChat,
        onDeleteMessage,
        onShowMenuMessage,
        onSendMessage
    } = useChat();
    return (
        <div className="flex h-screen">
            <div className="flex flex-col w-1/4 space-y-4 p-4">
                <ListMessage
                    user={user}
                    data={data}
                    friendId={friendId}
                    search={search}
                    onChangeSearchFriend={onChangeSearchFriend}
                    onClickChatFriend={onClickChatFriend}
                />
            </div>
            <div className="flex flex-col w-3/4 border-s-2">
                <ChatMessage
                    myId={myId}
                    friendId={friendId}
                    friendData={friendData}
                    tooltipId={tooltipId}
                    message={message} 
                    setMessage={setMessage}
                    onDeleteChat={onDeleteChat}
                    onDeleteMessage={onDeleteMessage}
                    onShowMenuMessage={onShowMenuMessage}
                    onSendMessage={onSendMessage}
                />
            </div>
            <Alert
                visible={alertOption.visiable}
                title={alertOption.title}
                message={alertOption.message}
                onCancel={alertOption.onCancel}
                onSubmit={alertOption.onSubmit}
            />
        </div>
    );
};

export default ChatPage;
