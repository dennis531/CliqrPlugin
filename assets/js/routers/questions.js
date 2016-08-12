import Backbone from 'backbone'
import utils from '../utils'

import TaskGroup from '../models/task_group'
import TaskGroupsCollection from '../models/task_groups'

import Task from '../models/task'
import TasksCollection from '../models/tasks'

import Voting from '../models/voting'

import TaskGroupsIndexView from '../views/task_groups_index'
import TaskGroupsShowView from '../views/task_groups_show'

import TasksShowView from '../views/tasks_show'

import VotingsShowView from '../views/votings_show'

// instantiate then remove bootstrapped
const bootstrapTaskGroups = function () {
    const taskGroups = new TaskGroupsCollection(cliqr.bootstrap.taskGroups)
    delete(cliqr.bootstrap.taskGroups)
    return taskGroups
}

// instantiate then remove bootstrapped
const bootstrapTasks = function () {
    const taskGroups = bootstrapTaskGroups()
    const tasks = _.flatten(_.filter(taskGroups.pluck('tasks')))
    return new TasksCollection(tasks)
}

const fetchTaskGroups = function () {
    if (cliqr.bootstrap.taskGroups) {
        return Backbone.$.Deferred()
            .resolve(bootstrapTaskGroups())
            .promise()
    }

    const taskGroups = new TaskGroupsCollection()
    return taskGroups.fetch().pipe(() => { return taskGroups }) // TODO (mlunzena) pipe should be then
}

const fetchTaskGroup = function (id) {
    let taskGroup
    if (cliqr.bootstrap.taskGroups) {
        taskGroup = bootstrapTaskGroups().get(id)
        if (taskGroup) {
            return Backbone.$.Deferred().resolve(taskGroup).promise()
        }
    }

    taskGroup = new TaskGroup({ id })
    return taskGroup.fetch().pipe( () => { return taskGroup }) // TODO (mlunzena) #pipe should be #then
}

const fetchVoting = function (id) {
    const voting = new Voting({ id })
    return voting.fetch().pipe( () => { return voting }) // TODO (mlunzena) #pipe should be #then
}

const fetchTask = function (id) {
    let task
    if (cliqr.bootstrap.taskGroups) {
        task = bootstrapTasks().get(id)
        if (task) {
            return Backbone.$.Deferred().resolve(task).promise()
        }
    }

    task = new Task({ id })
    return task.fetch().pipe( () => { return task }) // TODO (mlunzena) #pipe should be #then
}

const QuestionsRouter = Backbone.Router.extend({

    routes: {
        '': 'taskGroups',

        'task-groups': 'taskGroups',
        'task-groups-:id': 'taskGroup',

        'task-:id': 'task',

        'voting-:id': 'voting'
    },

    routeHandler(fetcher, id, view, useCollection = false) {
        this.showLoading()
        fetcher(id).done(
            (response) => {
                this.hideLoading()
                utils.changeToPage(new view(useCollection ? { collection: response } : { model: response }))
            })
    },

    // ROUTE: '#task-groups'
    taskGroups() { this.routeHandler(fetchTaskGroups, null, TaskGroupsIndexView, true) },

    // ROUTE: '#task-groups-:id'
    taskGroup(id) { this.routeHandler(fetchTaskGroup, id, TaskGroupsShowView) },

    // ROUTE: '#task-:id'
    task(id) { this.routeHandler(fetchTask, id, TasksShowView) },

    // ROUTE: '#voting-:id'
    voting(id) { this.routeHandler(fetchVoting, id, VotingsShowView) },

    // Loader stuff - TODO should not be here, AppView?

    loader: false,
    timeout: false,

    showLoading() {
        console.log(this.loader)
        this.timeout = setTimeout( () => {
            this.loader = Backbone.$('<span class="cliqr-loader"/>').html('Loading...').prependTo('#layout_content')
        }, 300)
    },

    hideLoading() {
        clearTimeout(this.timeout)
        if (this.loader) {
            this.loader.remove()
        }
    }
})

export default QuestionsRouter
