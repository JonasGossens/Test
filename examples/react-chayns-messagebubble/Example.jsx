import React, { PureComponent } from 'react';
import ExampleContainer from '../ExampleContainer';
import MessageBubble from '../../src/react-chayns-messagebubble/component/MessageBubble';

export default class Example extends PureComponent {
    render() {
        return (
            <ExampleContainer headline="MessageBubble">
                <MessageBubble position={0}>


                    Neue Nachricht
                </MessageBubble>
                <MessageBubble position={1}>


                    Neue Nachricht
                </MessageBubble>
                <MessageBubble position={2}>


                    Neue Nachricht
                </MessageBubble>
                <MessageBubble position={0} date={new Date()}>
                    <div style={{
                        width: '150px',
                        height: '150px',
                        backgroundColor: 'white'
                    }}
                    />
                </MessageBubble>
                <MessageBubble position={1} date={new Date()}>
                    <div style={{
                        width: '150px',
                        height: '150px',
                        backgroundColor: 'white'
                    }}
                    />
                </MessageBubble>
                <MessageBubble position={2} date={new Date()}>
                    <div style={{
                        width: '150px',
                        height: '150px',
                        backgroundColor: 'white'
                    }}
                    />
                </MessageBubble>
                <MessageBubble
                    position={0}
                    status={0}
                    textLeft="1 Std."
                    textRight="Antworten"
                    imageUrl="https://tsimg.cloud/59140-09519/146f1e54e9dbc0ebf70595a19f9e68055bf34d89.jpg"
                    onClickRight={console.log}
                    personId="127-89061"
                    maxWidth={300}
                >


                    Cocktail Special im BamBoo!
                </MessageBubble>
                <MessageBubble
                    position={0}
                    status={1}
                    textLeft="1 Std."
                    textRight="Antworten"
                    onClickRight={console.log}
                    personId="127-89061"
                    maxWidth={300}
                >


                    Ebene 1
                </MessageBubble>
                <MessageBubble
                    position={0}
                    status={0}
                    textLeft="1 Std."
                    textRight="Antworten"
                    onClickRight={console.log}
                    personId="127-89061"
                    maxWidth={300}
                    level={1}
                >


                    Ebene 2
                </MessageBubble>
                <MessageBubble
                    position={0}
                    status={0}
                    textLeft="1 Std."
                    textRight="Antworten"
                    onClickRight={console.log}
                    personId="127-89061"
                    maxWidth={300}
                    level={2}
                >


                    Ebene 3
                </MessageBubble>
                <MessageBubble
                    position={1}
                    status={1}
                    date={new Date()}
                    textLeft="10:00"
                    imageUrl="https://tsimg.space/v1/images/ec26b275-e9f6-e811-80d6-0025905a8161.jpg"
                    maxWidth={400}
                >


                    Star Wars
                </MessageBubble>
                <MessageBubble
                    position={1}
                    status={2}
                    url="https://www.w3schools.com"
                >


                    IFRAME
                </MessageBubble>
            </ExampleContainer>
        );
    }
}
