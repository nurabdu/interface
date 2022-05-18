import React from 'react';
import styled from 'styled-components';
import Messages from '../Messages';

const MessageStyle = styled.div`

`;

function Message(props) {

    
    const message = React.createRef();

    const Send = () => {
        let text = message.current.value;
        props.AddMessage(text);
        props.newMessageText('');
    };

    const OnMessageChagne = () => {
        let text = message.current.value;
        props.updateAddMessage(text);
    };
    let messageElement = props.dialogPage.map((message) => <Messages key={message} id={message.id} messages={message.message} />)
    return (<>
        <MessageStyle>
            <div>
                {messageElement}
            </div>
        </MessageStyle>
         <textarea onChange={OnMessageChagne} ref={message} value={props.newMessageText}/>
         <button onClick={Send}> Send Message</button>
         </>
    )
}

export default Message;

