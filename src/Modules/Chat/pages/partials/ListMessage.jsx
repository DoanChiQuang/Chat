import { getSummarizeString } from "../../../../utils/Functional";
import { SearchIcon } from "../../components/Icon";
import Input from "../../components/Input";
import List from "../../components/List";
import User from "../../components/User";

const ListMessage = ({user, data, friendId, search, onChangeSearchFriend, onClickChatFriend}) => {    

    const renderItem = ({ item, index }) => {
        return (
            <div
                key={index}
                className={`flex justify-between p-3 rounded-lg hover:bg-gray-200 cursor-pointer ${item.id == friendId && 'bg-gray-200'}`}
                onClick={() => onClickChatFriend(item.id)}
            >
                <div className="flex justify-center items-center space-x-3">
                    <div className='relative'>
                        <img src={item.avatar} className="w-10 h-10 rounded-full" />
                        <div className='absolute bottom-0 left-7 w-3 h-3 bg-green-500 rounded-full' />
                    </div>
                    <div className="space-y-1">
                        <div className="font-medium">{item.fullname}</div>
                        <div className="text-xs text-gray-500">
                            {getSummarizeString(item.chats[item.chats.length-1].message, 26)}
                        </div>
                    </div>
                </div>
                <div className="font-medium text-xs text-gray-500">
                    {item.time}
                </div>
            </div>
        );
    };

    return (
        <>
            <User data={user} />
            <Input
                value={search}
                onChange={(value) => onChangeSearchFriend(value)}
                startIconElement={<SearchIcon />}
                placeholder={'Search...'}
            />
            <List data={data} renderItem={renderItem} className={'space-y-2'} />
        </>
    );
};

export default ListMessage;
