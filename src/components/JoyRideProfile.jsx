import React, { useState, useEffect } from 'react';
import Joyride from 'react-joyride';
import { updateUserService } from "../services/userServices";
import { lightTheme, darkTheme } from "../contexts/ThemeContext";
import { useTheme } from "styled-components";
import { useUser } from '../contexts/userContext';


const steps = [
    {
        target: ".profile-info", // clase que pondremos en ProfileInfo container
        content: (
            <div>
                <h3>Modify Your Profile Info</h3>
                <p>
                    You can modify your personal data here. Any changes will be reflected
                    in your home stats.
                </p>
            </div>
        ),
        disableBeacon: true,
    },
    {
        target: ".profile-stats", // clase que pondremos en ProfileStats container
        content: (
            <div>
                <h3>View Your Stats</h3>
                <p>
                    Check out your stats in weekly, monthly, or annual views using the
                    charts.
                </p>
            </div>
        ),
    },
];

const ProfileTour = () => {
    const { token, user } = useUser();
    const [run, setRun] = useState(false);
    const theme = useTheme();

    const currentTheme = theme === "light" ? lightTheme : darkTheme;

    useEffect(() => {
        if ((user?.has_seen_profile_joyride === false || user?.has_seen_profile_joyride === null) &&
            typeof window !== "undefined" && window.innerWidth >= 768) {
            const timer = setTimeout(() => setRun(true), 1300);

            return () => clearTimeout(timer);
        }
    }, [user]);

    const handleProfileTourCallback = async (data) => {
        const { status } = data;
        const finishedStatuses = ["finished", "skipped"];

        if (finishedStatuses.includes(status)) {
            setRun(false);
            await updateUserService(token, { has_seen_profile_joyride: true });
            console.log("Joyride finalizado y guardado en el backend ✅");
        }
    }
    return (
        <Joyride
            steps={steps}
            run={run}
            continuous={true}
            showSkipButton={true}
            showProgress={true}
            scrollToFirstStep={true}
            callback={handleProfileTourCallback}
            styles={{
                options: {
                    zIndex: 10000,
                    backgroundColor: currentTheme.surface,
                    primaryColor: currentTheme.primary,
                    textColor: currentTheme.text,
                    overlayColor: "rgba(0, 0, 0, 0.6)",
                    spotlightShadow: `0 0 15px ${currentTheme.primary}`,
                    beaconSize: 22,
                    controlButtonPadding: 8,
                    borderRadius: 8,
                    fontFamily: "inherit",
                },
                tooltipContainer: {
                    boxShadow: `0 0 12px rgba(0, 0, 0, 0.2)`,
                    borderRadius: 8,
                    padding: "16px 20px",
                },
                buttonClose: {
                    color: currentTheme.accent,
                    fontWeight: "700",
                    cursor: "pointer",
                },
                buttonNext: {
                    backgroundColor: currentTheme.primary,
                    color: currentTheme.surface,
                    borderRadius: 6,
                    padding: "8px 16px",
                    fontWeight: "700",
                    cursor: "pointer",
                    border: "none",
                },
                buttonSkip: {
                    color: currentTheme.secondary,
                    cursor: "pointer",
                    fontWeight: "600",
                },
                buttonBack: {
                    color: currentTheme.secondary,
                    cursor: "pointer",
                    fontWeight: "600",
                },
            }}
        />
    )
}
export default ProfileTour;