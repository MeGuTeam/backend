const usernameRegex = /^[a-zA-Z0-9_]+$/;

const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/;

const validateUsername = (username) => {
    if (!username || typeof username !== "string") {
        return false;
    }

    if (username.length < 3 || username.length > 20) {
        return false;
    }

    return usernameRegex.test(username);
};

const validatePassword = (password) => {
    if (!password || typeof password !== "string") {
        return false;
    }

    if (password.length < 8) {
        return false;
    }

    return passwordRegex.test(password);
};

const validateInput = (input) => {
    const dangerousPatterns = [
        /<script/i,
        /<\/script/i,
        /[<>"'`;]/,
        /[\x00-\x1F\x7F]/,
    ];
    const hasDangerous = dangerousPatterns.some((pattern) =>
        pattern.test(input)
    );

    return !hasDangerous;
};

module.exports = { validateInput, validateUsername, validatePassword };
