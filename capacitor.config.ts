
import { CapacitorConfig} from "@capacitor/cli";
const config: CapacitorConfig = {
  appId: "com.food.app",
  appName: "Food App",
  bundledWebRuntime: false,
  webDir: "dist",
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000
    }
  }
}

export default config