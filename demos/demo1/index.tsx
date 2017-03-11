import * as SRD from "../../src/main";
import * as React from "react";
import * as ReactDOM from "react-dom";

declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

require("../test.scss");


/**
 * 
 * Simple test showing the Object oriented way of using this library.
 * It creates 2 nodes and links them together with a single link
 * 
 * @Author Dylan Vorster
 */
window.onload = () => {
	
	//1) setup the diagram engine
	
	//3-A) create a default node
	
	//6) render the diagram!
	
	interface Props {
		nodes: Array<any>
	}
	interface State {

	}
	class TestComponent extends React.Component<Props, State> {
		engine: SRD.DiagramEngine;
		model: SRD.DiagramModel;
		constructor(props: Props) {
			super(props);

		this.engine = new SRD.DiagramEngine();
		this.engine.registerNodeFactory(new SRD.DefaultNodeFactory());
		this.engine.registerLinkFactory(new SRD.DefaultLinkFactory());
		
		
		//2) setup the diagram model
		this.model = new SRD.DiagramModel();
		
		//5) load model into engine
		this.engine.setDiagramModel(this.model);
		}
		componentDidMount() {
			var x= 0;
			var y = 0;
			for(var i =0; i < this.props.nodes.length; i++) {
				var data = this.props.nodes[i];
				var node = new SRD.DefaultNodeModel(String(i),"rgb(192,255,0)");
				node.x = x;
				node.y = y
				this.model.addNode(node)
				x += 100 * Math.random();
				y += 100 * Math.random();
			}
				this.setState({name: 'test'});
		}
		render() {
			return (
				<SRD.DiagramWidget diagramEngine={this.engine} />
			)
			// return React.createElement(SRD.DiagramWidget,{diagramEngine: this.engine})

		}
	}


	
	var nodes = [
		{name: 'one'},
		{name: 'one'},
		{name: 'one'},
		{name: 'one'},
		{name: 'one'},
		{name: 'one'},
		{name: 'one'},
		{name: 'one'},
		{name: 'one'},
		{name: 'one'},
		{name: 'one'},
		{name: 'one'},
		{name: 'one'},
		{ name: 'two'},
		{ name: 'three'},
		{ name: 'four'}
	];
	interface WrapperProps {

	}
	class TestWrapper extends React.Component<WrapperProps, State> {
		render() {
			return(
				<div>
					<h1>Test</h1>
					<div style={{width: 200, height: 200}}>
						<TestComponent nodes={nodes} />
					</div>
				</div>
			)
		}
	}
	ReactDOM.render((<TestWrapper />), document.body);
	
	
	//!------------- SERIALIZING / DESERIALIZING ------------
	
	//we need this to help the system know what models to create form the JSON
// 	engine.registerInstanceFactory(new SRD.DefaultNodeInstanceFactory());
// 	engine.registerInstanceFactory(new SRD.DefaultPortInstanceFactory());
// 	engine.registerInstanceFactory(new SRD.LinkInstanceFactory());
	
// 	//serialize the model
// 	var str = JSON.stringify(model.serializeDiagram());
// 	console.log(str);
	
// 	//deserialize the model
// 	var model2 = new SRD.DiagramModel();
// 	model2.deSerializeDiagram(JSON.parse(str),engine);
// 	engine.setDiagramModel(model2);
// 	console.log(model2);
	
// 	//re-render the model
// 	ReactDOM.render(React.createElement(SRD.DiagramWidget,{diagramEngine: engine}), document.body);
}