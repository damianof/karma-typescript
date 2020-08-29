import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.component.vue'

describe('HelloWorld.vue', () => {
	it('renders props.msg when passed', () => {
		const msg = 'new message'
		const wrapper = shallowMount(HelloWorld, {
			propsData: {
				msg: msg
			}
		})
		expect(wrapper.find('h1').text()).to.equal(msg)
	})
})
