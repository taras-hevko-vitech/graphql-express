import React, { useState } from "react";
import "./ProfileMenu.scss";
import userIcon from "../../../assets/images/user-icon.svg";
import { useRecoilState } from "recoil";
import { authState } from "../../../state/atoms";

function ProfileMenu() {
    const [showMenu, setShowMenu] = useState(false);
    const [auth, setAuth] = useRecoilState(authState);

    const logout = () => {
        setAuth(null);
        localStorage.removeItem("token");
    };

    return (
        <div className="profile-menu" onClick={() => setShowMenu(!showMenu)}>
            {`TARAS HEVKO`}
            <img src={userIcon} alt="user" className="user-icon"/>
            {showMenu && (
                <div className="menu-items">
                    <div className="item">Edit my Profile</div>
                    <div className="item" onClick={logout}>Logout</div>
                </div>
            )}
        </div>
    );
}

export default ProfileMenu;
