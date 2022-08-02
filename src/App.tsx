import { AppProvider } from "./provider/app";
import { AppRoutes } from "./routes";

export default function App(){
  return (
    <AppProvider>
      <AppRoutes/>
    </AppProvider>
  )
}