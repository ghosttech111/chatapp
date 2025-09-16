import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "nativewind";
import React, { createContext, useEffect, useState } from "react";

export type ThemeOption = "light" | "dark" | "system";
const THEME_KEY = "@app_color_scheme";

type ThemeContextType = {
  preference: ThemeOption;
  applied: "light" | "dark"; // use on runtime
  setPreference: (themeOption: ThemeOption) => Promise<void>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const {getColorScheme, setColorScheme} = useColorScheme();
  const [getPreference, setPreference] = useState<ThemeOption>("system");
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    async () => {
      try {
        const savedTheme = await AsyncStorage.getItem(THEME_KEY);
        if (savedTheme === "light" || savedTheme === "dark") {
          setPreference(savedTheme);
          setColorScheme(savedTheme);
        } else {
          setPreference("system");
          setColorScheme("system");
        }
      } catch (error) {
        console.log("Failed to load theme: " + error);
      } finally {
        setReady(true);
      }
    };
  },[setColorScheme]);
}
