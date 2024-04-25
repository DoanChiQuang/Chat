import React, { useEffect, useRef } from 'react';

const List = ({ 
    data = [], 
    renderItem = () => {}, 
    className,
    scrollToBottom = false,
}) => {

    const itemEndRef = useRef(null);

    const onScrollToBottom = () => {
        if(scrollToBottom) itemEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        onScrollToBottom();
    }, [data]);

    return (
        <div className={`overflow-y-auto ${className}`}>
            {data.map((item, index) => renderItem({ item, index }))}
            <div ref={itemEndRef} />
        </div>
    );
};

export default List;
