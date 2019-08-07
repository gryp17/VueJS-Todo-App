import { mount, createLocalVue } from '@vue/test-utils'
import ElementUI from 'element-ui'
import Component from '../../src/components/TodoListItem'

//needed in order to parse ElementUI components
const localVue = createLocalVue()
localVue.use(ElementUI)

describe('TodoListItem', () => {

	let todoTask = {
		id: 1234,
		task: 'Add some unit test',
		completed: false
	}

	test('is a Vue instance', () => {
		const wrapper = mount(Component, {
			propsData: {
				task: todoTask
			},
			localVue: localVue
		})
		expect(wrapper.isVueInstance()).toBeTruthy()
	})

	test('renders the correct task text', () => {
		const wrapper = mount(Component, {
			propsData: {
				task: todoTask
			},
			localVue: localVue
		})

		expect(wrapper.text()).toMatch(todoTask.task)
	})

})
