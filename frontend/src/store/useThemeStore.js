import { create } from 'zustand'

// set theme in local storage also so that the user does not have to make changes again
export const useThemeStore = create((set) => ({
    theme : localStorage.getItem("lingopals-theme") || "dark",
    setTheme: (theme) => {
        localStorage.setItem("lingopals-theme", theme)
        set({ theme })
    }
}));
