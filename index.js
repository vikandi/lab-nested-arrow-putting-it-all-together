function createLoginTracker(userInfo) {

  let attemptCount = 0;

  return (passwordAttempt) => {

    if (attemptCount >= 3) {
      return "Account locked due to too many failed login attempts";
    }
    attemptCount++;
    
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }

    return `Attempt ${attemptCount}: Login failed`;
  };
};

const user = { username: "user1", password: "password123" };

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};