import React, { useState } from "react";
import "./ChatComponent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import MessageComponent from "./MessageComponent/MessageComponent";
import { useRecoilState } from "recoil";
import { authState, selectedChatId } from "../../state/atoms";

function ChatComponent() {
    const [chatMessages, setChatMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [showUploadMenu, setShowUploadMenu] = useState(false);

    const [auth] = useRecoilState(authState);
    const [chatId] = useRecoilState(selectedChatId);

    const onSend = async (e) => {
        e.preventDefault();
        if (message.trim().length > 0) {
            console.log("SEND")
        }
        setMessage("");
    };

    const handleMessageChange = async (e) => {
        setMessage(e.target.value)
    }

    return (
        <div className="chat-component">
            <div className="chat-messages">
                {chatMessages.map((mess, i) => (
                    mess &&
                    <MessageComponent
                        key={`${i}+${mess.id}`}
                        isMyMessage={mess.senderId === auth.id}
                        message={mess.content}
                        date={mess.timestamp}
                    />
                ))}
            </div>
            <form className="chat-footer" onSubmit={onSend}>
                <FontAwesomeIcon
                    icon={faPaperclip}
                    className="upload-clip"
                    onClick={() => setShowUploadMenu(!showUploadMenu)}
                />
                <input
                    type="text"
                    className="typing-area"
                    placeholder="Type your message…"
                    onChange={handleMessageChange}
                    value={message}
                />
                <button type="submit">SEND</button>
                {showUploadMenu && (
                    <div className="upload-menu">
                        <div className="upload-item">Photo</div>
                        <div className="upload-item">Video</div>
                        <div className="upload-item">Files</div>
                    </div>
                )}
            </form>
        </div>
    );
}

export default ChatComponent;
