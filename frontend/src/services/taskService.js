import API from '../api/axios';

export const getTasks = async () => {
  return await API.get('/tasks');
};

export const createTask = async (taskData) => {
  return await API.post('/tasks', taskData);
};

export const updateTaskStatus = async (taskId, status) => {
  return await API.patch(`/tasks/${taskId}`, { status });
};

export const deleteTask = async (taskId) => {
  return await API.delete(`/tasks/${taskId}`);
};
export const updateTask = (id, data) => API.put(`/tasks/${id}`, data); 
