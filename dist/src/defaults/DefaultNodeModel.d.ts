import { NodeModel } from "../Common";
import { DefaultPortModel } from "./DefaultPortModel";
import { AbstractInstanceFactory } from "../AbstractInstanceFactory";
export declare class DefaultNodeInstanceFactory extends AbstractInstanceFactory<DefaultNodeModel> {
    constructor();
    getInstance(): DefaultNodeModel;
}
/**
 * @author Dylan Vorster
 */
export declare class DefaultNodeModel extends NodeModel {
    name: string;
    color: string;
    text: string;
    contentTitle: string;
    ports: {
        [s: string]: DefaultPortModel;
    };
    drag: boolean;
    constructor(name?: string, text?: string, contentTitle?: string, color?: string, drag?: boolean);
    deSerialize(object: any): void;
    serialize(): {
        id: string;
    } & {
        _class: string;
        selected: boolean;
    } & {
        type: string;
        x: number;
        y: number;
        extras: {};
        ports: ({
            id: string;
        } & {
            _class: string;
            selected: boolean;
        } & {
            name: string;
            parentNode: string;
            links: string[];
        })[];
        drag: boolean;
    } & {
        name: string;
        text: string;
        contentTitle: string;
        color: string;
        drag: boolean;
    };
    getInPorts(): DefaultPortModel[];
    getOutPorts(): DefaultPortModel[];
}
