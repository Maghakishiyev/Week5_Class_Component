const TOKEN_KEY = "isLoggedIn";

export const login = () => {
  localStorage.setItem(TOKEN_KEY, "1");
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isLogin = () => {
  if (localStorage.getItem(TOKEN_KEY) === "1") {
    return true;
  }

  return false;
};
