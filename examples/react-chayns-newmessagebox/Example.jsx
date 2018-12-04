import React, { Component } from 'react';
import ExampleContainer from '../ExampleContainer';
import NewMessageBox from '../../src/react-chayns-newmessagebox/component/NewMessageBox';

export default class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: 'https://tsimg.space/v1/images/4fec81dc-b2f7-e811-80d6-0025905a8161.jpg',
            answerMessage: {
                personId: '127-89061',
                message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaion',
                imageUrl: 'https://tsimg.space/v1/images/4fec81dc-b2f7-e811-80d6-0025905a8161.jpg',
            }
        };
    }

    render() {
        const { imageUrl, answerMessage } = this.state;
        return (
            <ExampleContainer headline="NewMessageBox" transparent>
                <NewMessageBox
                    buttonText="Senden"
                    placeholder="Kommentieren"
                    menuItems={[{
                        text: 'Bild hochladen',
                        onClick: () => {
                            console.log('IMAGE UPLOAD');
                            this.setState({
                                imageUrl: 'https://tsimg.space/v1/images/4fec81dc-b2f7-e811-80d6-0025905a8161.jpg',
                                answerMessage: {
                                    personId: '127-89061',
                                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaion',
                                    imageUrl: 'https://tsimg.space/v1/images/4fec81dc-b2f7-e811-80d6-0025905a8161.jpg',
                                }
                            });
                        },
                        icon: 'ts-image'
                    }]}
                    onClear={() => {
                        this.setState({ imageUrl: null, answerMessage: null });
                    }}
                    answerMessage={answerMessage}
                    imageUrl={imageUrl}
                    onSend={console.log}
                />
            </ExampleContainer>
        );
    }
}
