import {
    imagePlaceholder
} from "./constants";

const capitalizeFirstLetter = string => (string)[0].toUpperCase() + (string).slice(1);

const isImageValid = (profile) => {
    if (profile.includes("jpg")) {
        return profile;
    }
    if (profile.includes("jpeg")) {
        return profile;
    }
    if (profile.includes("png")) {
        return profile;
    }
    if (profile.includes("gif")) {
        return profile;
    }
    if (profile.includes("svg")) {
        return profile;
    }
    return imagePlaceholder;
}

export {
    capitalizeFirstLetter,
    isImageValid
};