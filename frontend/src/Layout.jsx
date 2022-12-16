import React from "react";
import AppHeaderComponent from "./components/AppHeaderComponent/AppHeaderComponent";
import Teams from "./components/Teams/Teams";
import MessageList from "./components/MessageList/MessageList";
import ChatComponent from "./components/ChatComponent/ChatComponent";
import { Navigate, Route, Routes } from "react-router";
import AuthPage from "./pages/AuthPage";
import { useRecoilState } from "recoil";
import { selectedChatId } from "./state/atoms";
import SelectChatBanner from "./components/SelectChatBanner/SelectChatBanner";

function Layout() {
    const [chatID] = useRecoilState(selectedChatId)

    return (
        <Routes>
            <Route exact path="/login" element={<AuthPage />}/>
            <Route path="/chat-deem" element={
                <div>
                    <AppHeaderComponent/>
                    <div className="main">
                        <Teams/>
                        <MessageList/>
                        {chatID ? (
                            <>
                                <ChatComponent/>
                            </>
                        ) : (
                            <SelectChatBanner/>
                        )}
                    </div>
                </div>
            }/>
            <Route path="*" element={<Navigate to="/chat-deem"/>}/>
        </Routes>
    );
}

export default Layout;
