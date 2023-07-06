import { shallowMount } from '@vue/test-utils'
import TasksCardList from '@/components/TasksCardList.vue'

describe('Testing TasksCardList.vue', () => {
  it('renders the correct number of task cards', () => {
    // given
    const tasks = [
      { id: 1, taskName: 'Task 1', taskDescription: 'Description 1' },
      { id: 2, taskName: 'Task 2', taskDescription: 'Description 2' },
      { id: 3, taskName: 'Task 3', taskDescription: 'Description 3' }
    ]
    const wrapper = shallowMount(TasksCardList, {
      propsData: { tasks }
    })
    // then
    expect(wrapper.findAll('.card').length).toBe(tasks.length)
  })
  it('renders the task name and description correctly in the task cards', () => {
    // given
    const tasks = [
      { id: 1, taskName: 'Task 1', taskDescription: 'Description 1' },
      { id: 2, taskName: 'Task 2', taskDescription: 'Description 2' },
      { id: 3, taskName: 'Task 3', taskDescription: 'Description 3' }
    ]
    const wrapper = shallowMount(TasksCardList, {
      propsData: { tasks }
    })
    // then
    const cardElements = wrapper.findAll('.card')
    tasks.forEach((task, index) => {
      const card = cardElements.at(index)
      expect(card.find('.card-title').text()).toBe(task.taskName)
      expect(card.find('.card-text').text()).toBe(task.taskDescription)
    })
  })
})
