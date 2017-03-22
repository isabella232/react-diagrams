import * as React from "react";
import * as _ from "lodash";
var div = React.DOM.div;
import {DefaultNodeModel} from "./DefaultNodeModel";
import {DefaultPortLabel} from "./DefaultPortLabelWidget";

export interface DefaultNodeProps {
	node: DefaultNodeModel;
}

export interface DefaultNodeState {
}

/**
 * @author Dylan Vorster
 */
export class DefaultNodeWidget extends React.Component<DefaultNodeProps, DefaultNodeState> {

	public static defaultProps: DefaultNodeProps = {
		node: null,
	};

	constructor(props: DefaultNodeProps) {
		super(props);
		this.state = {
		}
	}
	showTitleContent() {
		if(this.props.node.text) {
			return (
				div({className:'content'},
					div({className:'contentTitle'},this.props.node.contentTitle),
					div({className:'text'},this.props.node.text),
				)
			)
		}
		return null;
	}
	render() {
		return (
			div({className: 'basic-node', style: {background: this.props.node.color }},
				div({className:'title'},
					div({className:'name'},this.props.node.name),
				),
				this.showTitleContent(),
				div({className:'ports'},
					div({className: 'in'}, _.map(this.props.node.getInPorts(),(port) => {
						return React.createElement(DefaultPortLabel,{model: port, key:port.id});
					})),
					div({className: 'out'}, _.map(this.props.node.getOutPorts(),(port) => {
						return React.createElement(DefaultPortLabel,{model: port, key:port.id});
					})),
				)
			)
		);
	}
}