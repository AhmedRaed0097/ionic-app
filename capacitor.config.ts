
import { CapacitorConfig} from "@capacitor/cli";
const config: CapacitorConfig = {
  appId: "io.ionic.demo.pg.vue",
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