const baseUrl = 'https://62840a40a48bd3c40b6a3c4f.mockapi.io/api/v1/calendar';

export const fetchEvent = () =>
  fetch(baseUrl).then((res) => {
    if (!res.ok) {
      throw new Error('Failed to fetch event list');
    }
    return res.json();
  });

export const createEvent = (taskDate) =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskDate),
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Faild to create event');
    }
  });

export const deleteEvent = (taskId) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Faild to delete event');
    }
  });
