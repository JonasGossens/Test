/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Input from '../../react-chayns-input/component/Input';
import Icon from '../../react-chayns-icon/component/Icon';
import Button from '../../react-chayns-button/component/Button';
import ContextMenu from '../../react-chayns-contextmenu/component/ContextMenu';

export default class NewMessageBox extends Component {
    static propTypes = {
        imageUrl: PropTypes.string,
        placeholder: PropTypes.string,
        buttonText: PropTypes.string,
        onSend: PropTypes.func.isRequired,
        menuItems: PropTypes.arrayOf(PropTypes.shape({
            onClick: PropTypes.func,
            text: PropTypes.string.isRequired,
            icon: PropTypes.object,
        })),
        answerMessage: PropTypes.shape({
            personId: PropTypes.string,
            message: PropTypes.string,
            imageUrl: PropTypes.string,
        }),
        onClear: PropTypes.func,
    };

    static defaultProps = {
        imageUrl: '',
        placeholder: '',
        menuItems: [],
        buttonText: '',
        answerMessage: null,
        onClear: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            key: Math.random()
        };
        this.getUserData = this.getUserData.bind(this);
        if (props.answerMessage.personId) this.getUserData(props.answerMessage.personId);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const { answerMessage } = this.props;
        if (nextProps.answerMessage && nextProps.answerMessage.personId && (!answerMessage || nextProps.answerMessage.personId !== answerMessage.personId)) {
            this.getUserData(nextProps.answerMessage.personId);
        }
        return true;
    }

    async getUserData(personId) {
        const data = await chayns.getUser({ personId });
        this.setState({ userName: data.UserFullName });
    }

    render() {
        const {
            buttonText,
            placeholder,
            onSend,
            menuItems,
            answerMessage,
            onClear,
            imageUrl,
        } = this.props;
        const { userName } = this.state;


        return (
            <div className="cc__newMessageBox">
                {onClear && (imageUrl || answerMessage)
                    ? (
                        <div className="cc__newMessageBox__x">
                            <Icon icon="ts-wrong" onClick={onClear}/>
                        </div>
                    )
                    : null}
                {imageUrl
                    ? (
                        <div style={{ backgroundImage: `url(${imageUrl})` }} className="cc__newMessageBox__preview"/>
                    )
                    : null}
                {answerMessage ? (
                        <div className="cc__newMessageBox__comment">
                            <div style={{ backgroundImage: `url(${answerMessage.imageUrl})` }}
                                 className="cc__newMessageBox__comment__image"/>
                            <div className="cc__newMessageBox__comment__text">
                                <p className="cc__newMessageBox__comment__text__name">{userName}</p>
                                <p className="cc__newMessageBox__comment__text__message">{answerMessage.message}</p>
                            </div>
                        </div>
                    )
                    : null}
                <div className="cc__newMessageBox__input-row">
                    <div className="cc__newMessageBox__input-row__input-group">
                        <Input placeholder={placeholder} onChange={(text) => {
                            this.text = text;
                        }}/>
                        <Icon icon={faSmile} className="cc__newMessageBox__input-row__input-group__icon"/>
                    </div>
                    <ContextMenu items={menuItems}>
                        <Icon icon={faPlus} className="cc__newMessageBox__input-row__icon"/>
                    </ContextMenu>
                </div>
                <div className="cc__newMessageBox__buttonWrapper">
                    <Button onClick={() => {
                        onSend(this.text);
                    }}>
                        {buttonText}
                    </Button>
                </div>
            </div>
        );
    }
}
