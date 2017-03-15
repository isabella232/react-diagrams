import { PortModel } from "../Common";
import { AbstractInstanceFactory } from "../AbstractInstanceFactory";
export declare class DefaultPortInstanceFactory extends AbstractInstanceFactory<DefaultPortModel> {
    constructor();
    getInstance(): DefaultPortModel;
}
/**
 * @author Dylan Vorster
 */
export declare class DefaultPortModel extends PortModel {
    in: boolean;
    label: string;
    drag: boolean;
    constructor(isInput: boolean, name: string, label?: string, drag?: boolean);
    deSerialize(object: any): void;
    serialize(): {
        id: string;
    } & {
        _class: string;
        selected: boolean;
    } & {
        name: string;
        parentNode: string;
        links: string[];
    } & {
        in: boolean;
        label: string;
    };
}
