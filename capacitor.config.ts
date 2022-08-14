
import { CapacitorConfig} from "@capacitor/cli";
const config: CapacitorConfig = {
  appId: "io.ionic.demo.pg.vue",
  appName: "Vue Photo Gallery",
  bundledWebRuntime: false,
  webDir: "dist",
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000
    }
  }
}

export default config