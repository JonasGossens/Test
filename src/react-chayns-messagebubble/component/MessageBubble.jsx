/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Gallery from '../../react-chayns-gallery/component/Gallery';
import Icon from '../../react-chayns-icon/component/Icon';
import SmallWaitCursor from '../../react-chayns-smallwaitcursor/component/SmallWaitCursor';

export default class MessageBubble extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        position: PropTypes.number,
        imageUrl: PropTypes.string,
        maxWidth: PropTypes.number,
        status: PropTypes.number,
        url: PropTypes.string,
        personId: PropTypes.string,
        textLeft: PropTypes.string,
        textRight: PropTypes.string,
        onClickRight: PropTypes.func,
        level: PropTypes.number,
        hideName: PropTypes.bool,
        hideProfilePicture: PropTypes.bool,
    };

    static defaultProps = {
        position: 0,
        imageUrl: null,
        maxWidth: 250,
        status: -1,
        url: null,
        personId: null,
        textLeft: null,
        textRight: null,
        onClickRight: null,
        level: 0,
        hideName: false,
        hideProfilePicture: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            key: Math.random()
        };
        this.getUserData = this.getUserData.bind(this);
        if (props.personId) this.getUserData(props.personId);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const { personId } = this.props;
        if (nextProps.personId !== personId && nextProps.personId) {
            this.getUserData(nextProps.personId);
        }
        return true;
    }

    async getUserData(personId) {
        const data = await chayns.getUser({ personId });
        this.setState({ userName: data.UserFullName });
    }

    render() {
        const {
            children,
            position,
            imageUrl,
            maxWidth,
            status,
            textLeft,
            textRight,
            onClickRight,
            url,
            personId,
            level,
            hideName,
            hideProfilePicture,
        } = this.props;

        const { userName, key } = this.state;
        console.log(userName);
        const iFrameLoaded = true;
        const image = imageUrl
            ? (
                <img
                    className="cc__message-bubble__content__bubble__children--image"
                    src={Gallery.getScaledImageUrl(imageUrl, null, maxWidth - 4)}
                    width="100%"
                    alt=""
                    onClick={() => {
                        chayns.openImage(Gallery.getScaledImageUrl(imageUrl, null, null));
                    }}
                />
            )
            : null;

        let readStatus = null;
        if (status === 0) {
            readStatus = (
                <div className="cc__message-bubble__content__message-info__message-status">
                    <Icon icon="ts-check"/>
                </div>
            );
        } else if (status === 1) {
            readStatus = (
                <div className="cc__message-bubble__content__message-info__message-status">
                    <Icon icon="ts-check"/>
                    <Icon icon="ts-check"/>
                </div>
            );
        }


        return (
            <div className={classNames('cc__message-bubble', {
                'cc__message-bubble--left': position === 0,
                'cc__message-bubble--right': position === 1,
                'cc__message-bubble--center': position === 2,
            })}
            >
                {personId ? (
                    <div
                        className="cc__message-bubble__userImage"
                        style={{
                            backgroundImage: `url(https://sub60.tobit.com/u/${personId}?size=35)`,
                            marginLeft: `${position === 0 ? level * 67 : 0}px`
                        }}
                    />
                ) : null}
                <div className="cc__message-bubble__content" style={{ maxWidth: `${maxWidth}px` }}>
                    <div className="cc__message-bubble__content__bubble">
                        {image}
                        <div className="cc__message-bubble__content__bubble__children">
                            {userName && !hideName
                                ? (
                                    <div className="cc__message-bubble__content__bubble__children__title">
                                        {userName}
                                    </div>
                                )
                                : null}
                            {children}
                            {url
                                ? (
                                    <div className="cc__message-bubble__content__bubble__children__iFrame">
                                        <iframe
                                            src={url}
                                            className={classNames('cc__message-bubble__content__bubble__children__iFrame--frame')}
                                            ref={ref => this.iframe = ref}
                                            title={url + key}
                                            name={url + key}
                                            id={url + key}
                                            scrolling="no"
                                        />
                                        <div className={classNames('cc__message-bubble__content__bubble__children__iFrame--waitcursor')}>
                                            <SmallWaitCursor
                                                show={!iFrameLoaded}
                                            />
                                        </div>
                                    </div>
                                )
                                : null
                            }
                        </div>
                    </div>
                    <div className="cc__message-bubble__content__message-info">
                        {textLeft
                            ? (
                                <div className="cc__message-bubble__content__message-info__message-left">
                                    {textLeft}
                                </div>
                            ) : null}
                        {readStatus}
                        {textRight
                            ? (
                                <div
                                    className="cc__message-bubble__content__message-info__message-right"
                                    onClick={onClickRight}
                                >
                                    {textRight}
                                </div>
                            ) : null}

                    </div>
                </div>
            </div>
        );
    }
}
