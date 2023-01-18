
import { UIX } from "uix";

// start provider for client endpoint
UIX.Provider.setClientRootDir(new URL('../public/', import.meta.url));
UIX.Provider.setClientEntrypoint('./entrypoint.ts')
UIX.Provider.goPublic();