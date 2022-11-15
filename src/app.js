var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let App = class App {
    constructor() {
        this.username = this.meta.sender.toString();
        this.main = new UIX.Components.TextView({ text: "Hi from Server", border_color: 'var(--green)', border: 5 }, { margin: 20 });
        this.shop = new UIX.Components.TextView({ text: "Hi from Server", border_color: 'var(--green)', border: 5 }, { margin: 20 });
    }
    more() {
        return new UIX.Components.TextView({ text: "Hi from Server", border_color: 'var(--green)', border: 5 }, { margin: 20 });
    }
};
__decorate([
    property
], App.prototype, "username", void 0);
__decorate([
    UIX.Section
], App.prototype, "main", void 0);
__decorate([
    UIX.Section("shop")
], App.prototype, "shop", void 0);
__decorate([
    UIX.Section("more/abc")
], App.prototype, "more", null);
App = __decorate([
    UIX.App({
        js: ['./public/main.js']
    })
], App);
export { App };
//# sourceMappingURL=app.js.map