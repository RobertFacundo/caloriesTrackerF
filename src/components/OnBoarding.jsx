import React from "react";
import { useOnBoarding } from "../hooks/useOnBoarding";

export const OnBoarding = () => {
    const {
        details,
        handleChange,
        handleSubmit,
        loading,
        error,
    } = useOnBoarding();

    return (
        <div>
            <h2>Welcome! 👋</h2>
            <form onSubmit={handleSubmit}>
                <label>How much do you weight?
                    <input
                        type="text"
                        name='weight'
                        value={details.weight}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    ...and how tall are you in cms?
                    <input
                        type="number"
                        name='height'
                        value={details.height}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    ...age?
                    <input
                        type="number"
                        name="age"
                        value={details.age}
                        onChange={handleChange}
                        required
                    >
                    </input>
                </label>
                <label>
                    ...and your body is...?
                    <select
                        name="gender"
                        value={details.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select</option>
                        <option value="male">Masculine</option>
                        <option value="femenine">Femenine</option>
                    </select>
                </label>
                <label>
                    ...and for last but not least, how often do you excercise?
                    <select
                    name="activity_level"
                    value={details.activity_level}
                    onChange={handleChange}
                    required
                    >
                        <option value="">Select</option>
                        <option value="sedentary">Sedentary(almost no excercise)</option>
                        <option value="light">Light excercise, maybe 1 or 3 day a week</option>
                        <option value="moderate">Moderate (e to 5 days a week)</option>
                        <option value='active'>Active... 6 days a week</option>
                        <option value="very_active">Intense training throught out the whole week</option>
                    </select>
                </label>

                <button type="submit" disabled={loading}>
                    {loading ? 'Saving details': 'Update details'}
                </button>
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}