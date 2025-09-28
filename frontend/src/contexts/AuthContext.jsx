// Save user in localStorage
export const login = (userData) => {
  localStorage.setItem("user", JSON.stringify(userData));
};

// Get user from localStorage
export const getUser = () => {
  const storedUser = localStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : null;
};

// Logout (clear user)
export const logout = () => {
  localStorage.removeItem("user");
};
