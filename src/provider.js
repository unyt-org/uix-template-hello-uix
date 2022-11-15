import { UIX } from "uix";
import { Datex } from "unyt_core";
await Datex.Supranet.connect();
UIX.Provider.use(() => new UIX.Components.GridGroup({ rows: [1, 1], columns: [1, 2], border_color: 'var(--blue)' }, { margin: 20 }, [
    new UIX.Components.TextView({ text: "Hi from Server", border_color: 'var(--green)', border: 5 }, { margin: 20 }),
    new UIX.Components.TextView({ text: "Hi from Server 2", border_color: 'var(--red)', border: 5 }, { margin: 20, gx: 1 })
]));
UIX.Provider.setRootDir(new URL("./public/", import.meta.url));
UIX.Provider.setImportMap(new URL("./public/importmap.json", import.meta.url));
UIX.Provider.useFile('./main.js');
UIX.Provider.goPublic();
//# sourceMappingURL=provider.js.map