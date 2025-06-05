import React from "react";
import { NavBar } from "../components/NavBar";
import ProfileInfo from "../components/ProfileInfo";
import ProfileStats from "../components/ProfileStats";
import { Container, ContentWrapper, LeftPanel, RightPanel } from "../styled/components/ProfileStyled";

export const Profile = () => {
    return (
           <Container>
             <NavBar />
             <ContentWrapper>
                <LeftPanel>
                    <ProfileInfo />
                </LeftPanel>
                <RightPanel>
                    <ProfileStats />
                </RightPanel>
             </ContentWrapper>
           </Container>
    )
}