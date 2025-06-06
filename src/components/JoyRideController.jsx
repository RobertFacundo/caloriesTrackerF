import React, { useEffect, useState } from "react";
import Joyride from "react-joyride";
import { useUser } from "../contexts/userContext";
import { updateUserService } from "../services/userServices";
import { lightTheme, darkTheme } from "../contexts/ThemeContext";
import { useTheme } from "styled-components";

const steps = [
    {
        target: ".add-meal-button",
        content: (
            <>
                <h3>Add a Meal</h3>
                <p> Use the button to add a meal, then you can add ingredients with their
                    nutritional info (kcal, carbs, protein, fat).
                </p>
            </>
        ),
        disableBeacon: true,
    },
    {
        target: ".nutrition-values",
        content: (
            <>
                <h3>Nutrition Values</h3>
                <p> Here you can see the nutritional summary of your meals: calories,
                    protein, carbs, and fat.
                </p>
            </>
        ),
    },
    {
        target: ".home-stats",
        content: (
            <>
                <h3>Home Stats</h3>
                <p> Track your daily calories, whether today is a training day, and see
                    your deficit.
                </p>
            </>
        ),
    },
];

export const JoyRideController = () => {
    const { token, user } = useUser();
    const [run, setRun] = useState(false);
    const theme = useTheme();

    const currentTheme = theme === "light" ? lightTheme : darkTheme;

    useEffect(() => {
        if ((user?.has_seen_home_joyride === false || user?.has_seen_home_joyride === null) &&
            typeof window !== "undefined" && window.innerWidth >= 768) {
            const timer = setTimeout(() => setRun(true), 1300);

            return () => clearTimeout(timer);
        }
    }, [user]);

    const handleJoyRideCallback = async (data) => {
        const { status } = data;
        const finishedStatuses = ["finished", "skipped"];

        if (finishedStatuses.includes(status)) {
            setRun(false);
            await updateUserService(token, { has_seen_home_joyride: true });
            console.log("Joyride finalizado y guardado en el backend ✅");
        }
    };

    return (
        <Joyride
            steps={steps}
            run={run}
            continuous={true}
            showSkipButton={true}
            showProgress={true}
            scrollToFirstStep={true}
            callback={handleJoyRideCallback}
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
    );
};
