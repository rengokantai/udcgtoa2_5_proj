System.register(['angular2/core', "./item.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, item_service_1;
    var NewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (item_service_1_1) {
                item_service_1 = item_service_1_1;
            }],
        execute: function() {
            NewComponent = (function () {
                //itemadd=new EventEmitter<listItem>();
                function NewComponent(_iS) {
                    this._iS = _iS;
                    this.item = { name: '', amount: 0 };
                }
                NewComponent.prototype.onItemAdd = function () {
                    this._iS.insertItem({ name: this.item.name, amount: this.item.amount });
                };
                NewComponent = __decorate([
                    core_1.Component({
                        selector: 'new-item',
                        template: "\n        <label for=\"name\">name</label>\n    <input type=\"text\" id=\"name\" [(ngModel)]=\"item.name\">\n    <label for=\"amount\">amount</label>\n    <input type=\"text\" id=\"amount\" [(ngModel)]=\"item.amount\">\n    <button (click)=\"onItemAdd()\">add</button>\n    "
                    }), 
                    __metadata('design:paramtypes', [item_service_1.ItemService])
                ], NewComponent);
                return NewComponent;
            })();
            exports_1("NewComponent", NewComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QvbmV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJOZXdDb21wb25lbnQiLCJOZXdDb21wb25lbnQuY29uc3RydWN0b3IiLCJOZXdDb21wb25lbnQub25JdGVtQWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFhSUEsdUNBQXVDQTtnQkFFdkNBLHNCQUFvQkEsR0FBZUE7b0JBQWZDLFFBQUdBLEdBQUhBLEdBQUdBLENBQVlBO29CQUhuQ0EsU0FBSUEsR0FBQ0EsRUFBQ0EsSUFBSUEsRUFBQ0EsRUFBRUEsRUFBQ0EsTUFBTUEsRUFBQ0EsQ0FBQ0EsRUFBQ0EsQ0FBQ0E7Z0JBR2FBLENBQUNBO2dCQUN0Q0QsZ0NBQVNBLEdBQVRBO29CQUNJRSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFVQSxDQUFDQSxFQUFDQSxJQUFJQSxFQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFDQSxNQUFNQSxFQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFDQSxDQUFDQSxDQUFDQTtnQkFDdkVBLENBQUNBO2dCQWxCTEY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBQ0EsVUFBVUE7d0JBQ25CQSxRQUFRQSxFQUFDQSxvUkFNUkE7cUJBQ0pBLENBQUNBOztpQ0FVREE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQW5CQSxBQW1CQ0EsSUFBQTtZQW5CRCx1Q0FtQkMsQ0FBQSIsImZpbGUiOiJsaXN0L25ldy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBIZXJuYW4gWS5LZSBvbiAyMDE2LzIvMTkuXHJcbiAqL1xyXG5pbXBvcnQge0NvbXBvbmVudCxFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge2xpc3RJdGVtfSBmcm9tIFwiLi4vaXRlbXR5cGVcIjtcclxuaW1wb3J0IHtJdGVtU2VydmljZX0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjonbmV3LWl0ZW0nLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+bmFtZTwvbGFiZWw+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBbKG5nTW9kZWwpXT1cIml0ZW0ubmFtZVwiPlxyXG4gICAgPGxhYmVsIGZvcj1cImFtb3VudFwiPmFtb3VudDwvbGFiZWw+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImFtb3VudFwiIFsobmdNb2RlbCldPVwiaXRlbS5hbW91bnRcIj5cclxuICAgIDxidXR0b24gKGNsaWNrKT1cIm9uSXRlbUFkZCgpXCI+YWRkPC9idXR0b24+XHJcbiAgICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmV3Q29tcG9uZW50e1xyXG4gICAgaXRlbT17bmFtZTonJyxhbW91bnQ6MH07XHJcbiAgICAvL2l0ZW1hZGQ9bmV3IEV2ZW50RW1pdHRlcjxsaXN0SXRlbT4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pUzpJdGVtU2VydmljZSl7fVxyXG4gICAgb25JdGVtQWRkKCl7XHJcbiAgICAgICAgdGhpcy5faVMuaW5zZXJ0SXRlbSh7bmFtZTp0aGlzLml0ZW0ubmFtZSxhbW91bnQ6dGhpcy5pdGVtLmFtb3VudH0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
