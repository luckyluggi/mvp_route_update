import { PiletApi } from "my-appshell";

export default (app: PiletApi) => {     
  app.registerExtension('Layout.Topbar.Left', app.fromBlazor('Headline'));
};