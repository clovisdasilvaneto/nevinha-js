import {updateElement, IsomorphicNevinhaComponent} from './isomorphic';
import {diffDOM} from './dom/client';

class NevinhaComponent extends IsomorphicNevinhaComponent {
	constructor(props, context) {
		super(props, context);
	}

	setState(states) {
		const currentElement = this.render();

		Object.keys(states).map(key => (this.state[key] = states[key]));
		updateElement(
			this.element.parentNode,
			this.render(),
			currentElement,
			diffDOM
		);
	}
}

export {NevinhaComponent};
export default NevinhaComponent;