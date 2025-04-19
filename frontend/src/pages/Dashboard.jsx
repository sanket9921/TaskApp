import React, { useEffect, useState } from 'react';
import {
  getTasks,
  createTask,
  updateTask,
  updateTaskStatus,
  deleteTask,
} from '../services/taskService';
import Header from '../components/Header';
import ActionModal from '../components/common/ActionModal';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [show, setShow] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false); 

  const loadTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (err) {
      alert('Error loading tasks');
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true); 

    if (!title || !desc) return; 

    try {
      if (editingTaskId) {
        await updateTask(editingTaskId, { title, description: desc });
      } else {
        await createTask({ title, description: desc });
      }
      setTitle('');
      setDesc('');
      setEditingTaskId(null);
      setShow(false);
      setFormSubmitted(false); 
      loadTasks();
    } catch (err) {
      alert('Error saving task');
    }
  };

  const handleEdit = (task) => {
    setTitle(task.title);
    setDesc(task.description);
    setEditingTaskId(task._id);
    setShow(true);
    setFormSubmitted(false); 
  };

  const handleStatusChange = async (taskId, newStatus) => {
    try {
      await updateTaskStatus(taskId, newStatus);
      loadTasks();
    } catch (err) {
      alert('Error updating status');
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      loadTasks();
    } catch (err) {
      alert('Error deleting task');
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      <Header />

      <div className="container mt-2 d-flex justify-content-between align-items-center">
        <h2>Dashboard</h2>
        <button
          onClick={() => {
            setShow(true);
            setTitle('');
            setDesc('');
            setEditingTaskId(null);
            setFormSubmitted(false); 
          }}
          className="btn btn-primary"
        >
          <i className="fas fa-plus"></i> Add Task
        </button>
      </div>

      <div className="container mt-2 bg-light rounded-3 p-3">
        <h4>Tasks</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task._id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>
                  <select
                    value={task.status}
                    onChange={(e) => handleStatusChange(task._id, e.target.value)}
                    className="form-select"
                  >
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>
                <td>
                  <button
                    onClick={() => handleEdit(task)}
                    className="btn btn-warning"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="btn btn-danger ms-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ActionModal show={show} onClose={() => setShow(false)}>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="taskTitle" className="form-label">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`form-control ${formSubmitted && !title && 'is-invalid'}`}
              id="taskTitle"
            />
            {formSubmitted && !title && <div className="invalid-feedback">Title is required</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              rows={4}
              className={`form-control ${formSubmitted && !desc && 'is-invalid'}`}
            />
            {formSubmitted && !desc && <div className="invalid-feedback">Description is required</div>}
          </div>
          <button
            type="submit"
            className="btn btn-primary"
          >
            {editingTaskId ? 'Update Task' : 'Add Task'}
          </button>
        </form>
      </ActionModal>
    </div>
  );
};

export default Dashboard;
