import { makeInstaller } from "@cocoreimu-ui/utils";
import components from "./components";
import "@cocoreimu-ui/theme/index.css"

const installer = makeInstaller(components);

export * from "@cocoreimu-ui/components";
export default installer;
