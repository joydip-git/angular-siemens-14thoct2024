import { NgModuleRef, PlatformRef } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { RootModule } from "./app/root.module";

const platform: PlatformRef = platformBrowserDynamic()
platform
  .bootstrapModule(RootModule)
  .then((res: NgModuleRef<RootModule>) => console.log(res.instance))
  .catch(e => console.log(e))