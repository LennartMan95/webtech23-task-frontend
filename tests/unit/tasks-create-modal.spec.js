import { mount } from '@vue/test-utils'
import TasksCreateModal from '@/components/TasksCreateModal'

describe('Testing TasksCreateModal.vue', () => {
  it('should not show form by default', () => {
    // when
    const wrapper = mount(TasksCreateModal)

    // then
    expect(wrapper.find('#exampleModal').classes()).not.toContain('show')
  })
  it('should show form when "Create New Task" button is clicked', async () => {
    // given
    const wrapper = mount(TasksCreateModal)

    // when
    await wrapper.find('.btn-primary').trigger('click')

    // then
    expect(wrapper.find('#exampleModal').classes()).toContain('modal', 'fade', 'show')
  })
})
