import { useEffect, useState } from 'react';
import { ListFriendChat, UserInfo } from '../datasets/data';

const useChat = () => {
    const [message, setMessage] = useState('');
    const [myId, setMyId] = useState(null);
    const [friendId, setFriendId] = useState(null);
    const [search, setSearch] = useState(undefined);
    const [user, setUser] = useState(UserInfo);
    const [data, setData] = useState(ListFriendChat);
    const [friendData, setFriendData] = useState([]);
    const [alertOption, setAlertOption] = useState({
        visiable: false,
        title: 'Thông báo!',
        message: '',
        onCancel: () => {},
        onSubmit: () => {},
    });
    const [tooltipId, setTooltipId] = useState(null);

    const onClickChatFriend = (id) => {
        setFriendId(id);
    };

    const onChangeSearchFriend = (value) => {
        setSearch(value);
    };

    // Delete Chat Friend
    const onDeleteChat = (id) => {
        setAlertOption({
            visiable: true,
            title: 'Thông báo!',
            message: 'Bạn có chắc xóa tin nhắn?',
            onCancel: () => onCancelDeleteChat(),
            onSubmit: () => onSubmitDeleteChat(id),
        });        
    };    

    const onSubmitDeleteChat = (id) => {
        const newData = ListFriendChat.filter((item) => item.chatId != id);
        setData(newData);
        setAlertOption({ ...alertOption, visiable: false });
    };

    const onCancelDeleteChat = () => {
        setAlertOption({ ...alertOption, visiable: false });
    }

    // Delete Message Conversation
    const onShowMenuMessage = (e, id) => {
        e.preventDefault();
        if(e.type == 'contextmenu') {                        
            setTooltipId(id);
        }
    }

    const onDeleteMessage = (id) => {
        setAlertOption({
            visiable: true,
            title: 'Thông báo!',
            message: 'Bạn có chắc xóa tin nhắn?',
            onCancel: () => onCancelDeleteMessage(),
            onSubmit: () => onSubmitDeleteMessage(id),
        });
    }

    const onSubmitDeleteMessage = (id) => {
        const newChats = friendData.chats.filter(item => item.id != id);        
        setFriendData({...friendData, chats: newChats});
        setAlertOption({ ...alertOption, visiable: false });
    }

    const onCancelDeleteMessage = () => {
        setAlertOption({ ...alertOption, visiable: false });
    }

    const onSendMessage = (myId, message) => {
        if(message) {
            setFriendData({...friendData, chats: [...friendData.chats, {id: friendData.chats.length+1, userId: myId, message: message}]})
        }
    }

    // Add Message Conversation

    useEffect(() => {
        setTooltipId(null);
        if (data) {
            const id = data[0].id;
            setFriendId(id);
        }
    }, [data]);

    useEffect(() => {
        setTooltipId(null);
        if (user) {
            const id = user.id;
            setMyId(id);
        }
    }, [user]);

    useEffect(() => {
        setTooltipId(null);
        if (myId && friendId) {
            const records = data.filter((item) => item.id == friendId);
            setFriendData(records[0]);
        }
    }, [myId, friendId]);

    useEffect(() => {
        setTooltipId(null);
        if (search) {
            const newData = ListFriendChat.filter((item) =>
                item.fullname.toLowerCase().includes(search.toLowerCase())
            );
            setData(newData);
        } else setData(ListFriendChat);
    }, [search]);

    return {
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
        onSendMessage,
    };
};

export default useChat;
