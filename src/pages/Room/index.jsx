import React from 'react';
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const RoomPage = () => {
    const { roomId } = useParams();

    const myMeeting = async (element) => {
        const appId = 14989480;
        const serverSecret = `b03f56137bf8b8031fcf52504ed825ab`;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appId, 
            serverSecret, 
            roomId,
            Date.now().toString(), 
            'Daniel'
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
        container: element,
        scenario: {
            mode: ZegoUIKitPrebuilt.VideoConference,
        },
    });
    }
    return (
        <div className='room-page'>
            < div ref={myMeeting}/>
            </div>
    )
}

export default RoomPage;