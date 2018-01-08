export class Quote {
	public showConstructor: boolean;
	constructor(public id:number, public name:string, public description:string){
		this.showConstructor=false
	}
}
