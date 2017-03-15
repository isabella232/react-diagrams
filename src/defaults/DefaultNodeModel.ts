import {NodeModel} from "../Common";
import {DefaultPortModel} from "./DefaultPortModel";
import * as _ from "lodash";

import {AbstractInstanceFactory} from "../AbstractInstanceFactory";

export class DefaultNodeInstanceFactory extends AbstractInstanceFactory<DefaultNodeModel>{
	
	constructor(){
		super("DefaultNodeModel");
	}
	
	getInstance(){
		return new DefaultNodeModel();
	}
}

/**
 * @author Dylan Vorster
 */
export class DefaultNodeModel extends NodeModel{
	
	name: string;
	color: string;
	text: string;
	contentTitle: string;
	ports:  {[s: string]:DefaultPortModel};
	drag: boolean;
	
	constructor(name?: string,text?: string,contentTitle?: string,color: string = 'rgb(0,192,255)',drag: boolean=true){
		super("default");
		this.name = name;
		this.text = text;
		this.contentTitle =contentTitle;
		this.color = color;
		this.drag = drag;
	}
	
	deSerialize(object){
		super.deSerialize(object);
		this.name = object.name;
		this.text = object.text;
		this.contentTitle = object.contentTitle;
		this.color = object.color;
		this.drag = object.drag;
	}
	
	serialize(){
		return _.merge(super.serialize(),{
			name: this.name,
			text: this.text,
			contentTitle: this.contentTitle,
			color: this.color,
			drag: this.drag,
		});
	}
	
	getInPorts(): DefaultPortModel[]{
		return _.filter(this.ports,(portModel) => {
			return portModel.in;
		});
	}
	
	getOutPorts(): DefaultPortModel[]{
		return _.filter(this.ports,(portModel) => {
			return !portModel.in;
		});
	}
}