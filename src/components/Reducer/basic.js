// action

export const SIDEBAR_TOGGLE = "SIDEBAR_TOGGLE";
/**
 * 侧边栏
 * false：收起；true：展开；
 * @param {boolean} state 侧边栏状态
 */
export const sidebar_toggle = (toggle) => {
	return {
		type: SIDEBAR_TOGGLE,
		toggle
	};
};

export default (state, action) => {
	if (!state) {
		state = {
			toggle: true
		};
	}
	switch (action.type) {
		case SIDEBAR_TOGGLE:
			return {
				toggle: !action.toggle
			};
		default:
			return state;
	}
};
