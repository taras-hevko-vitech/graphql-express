import React, { useEffect, useState } from "react";
import "./ProfileInformation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronLeft, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { selectedChatId } from "../../state/atoms";

function ProfileInformation() {
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [profile, setProfile] = useState({
        email: "",
        firstName: "",
        id: "",
        lastName: "",
        phoneNo: ""
    });
    const [chatId] = useRecoilState(selectedChatId);
    const navigate = useNavigate();

    useEffect(() => {
        if (chatId) {
            getUserById();
        }
    }, [chatId]);

    const getUserById = async () => {
        console.log({
            email: "",
            firstName: "",
            id: "",
            lastName: "",
            phoneNo: ""
        })
    };

    return (
        <>
            <div className="profile-information-mobile">
                <div className="left">
                    <img src="https://picsum.photos/seed/picsum/200/300" alt="" className="avatar"/>
                    <div>
                        <div className="user-name">{`${profile.firstName} ${profile.lastName}`}</div>
                        <div className="online-status">online</div>
                    </div>
                </div>
                <FontAwesomeIcon
                    icon={showProfileMenu ? faChevronUp : faChevronDown}
                    onClick={() => {
                        setShowProfileMenu(!showProfileMenu);
                    }}
                />
            </div>
            {showProfileMenu && (
                <div className="user-info">
                    <div className="title">Profile Information</div>
                    <div className="profile-link">Show full profile</div>
                    <div className="block-info">
                        <div>Email: {profile.email}</div>
                        <div>Phone number: {profile.phoneNo}</div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProfileInformation;
