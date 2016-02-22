/**
 * Created by Hernan Y.Ke on 2016/2/19.
 */
import {Component,EventEmitter} from 'angular2/core';
import {listItem} from "../itemtype";
import {ItemService} from "./item.service";


@Component({
    selector:'new-item',
    template:`
        <label for="name">name</label>
    <input type="text" id="name" [(ngModel)]="item.name">
    <label for="amount">amount</label>
    <input type="text" id="amount" [(ngModel)]="item.amount">
    <button (click)="onItemAdd()">add</button>
    `
})

export class NewComponent{
    item={name:'',amount:0};
    //itemadd=new EventEmitter<listItem>();

    constructor(private _iS:ItemService){}
    onItemAdd(){
        this._iS.insertItem({name:this.item.name,amount:this.item.amount});
    }
}