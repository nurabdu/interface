import React from 'react';
import styled from 'styled-components';
import Messages from '../Messages';

const MessageStyle = styled.div`

`;

function Message(props) {

    const message = React.createRef()
    const Send = () => {
        let text = message.current.value;
        props.AddMessage(text);
    }

    let messageElement = props.dialogPage.map((message) => <Messages id={message.id} messages={message.message} />)

    console.log(messageElement);
    return (<>
        <MessageStyle>
            <div>
                {messageElement}
            </div>
        </MessageStyle>
         <textarea ref={message}>
         </textarea>
         <button onClick={Send}> Send Message</button>
         </>
    )
}

export default Message;

