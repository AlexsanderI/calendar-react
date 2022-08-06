const baseUrl = 'https://62840a40a48bd3c40b6a3c4f.mockapi.io/api/v1/calendar';

export const fetchEventsList = async () => {
  return fetch(baseUrl).then((result) => {
    if (result.ok) {
      return result.json();
    } else {
      throw new Error(alert(" Internal Server Error. Can't display events "));
    }
  });
  // .then((eventsList) =>
  //   eventsList.map(({ dateFrom, dateTo, ...eventsList }) => ({
  //     ...eventsList,
  //     dateFrom: new Date(dateFrom),
  //     dateTo: new Date(dateTo),
  //   }))
  // );
};

export const deleteEvent = async (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  }).then((response) => {
    if (!response.ok) {
      throw new Error(alert(" Internal Server Error. Can't display events "));
    }
  });
};
export const createEvent = async (eventData) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(alert(" Internal Server Error. Can't display events "));
    }
  });
};

// export const createEvent = (taskDate) =>
//   fetch(baseUrl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(taskDate),
//   }).then((response) => {
//     if (!response.ok) {
//       throw new Error('Faild to create task');
//     }
//   });

// export const fetchEvent = () =>
//   fetch(baseUrl).then((res) => {
//     if (!res.ok) {
//       throw new Error('Failed to fetch tasks list');
//     }
//     return res.json();
//   });

// export const updateTask = (taskId, taskTada) =>
//   fetch(`${baseUrl}/${taskId}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(taskTada),
//   }).then((response) => {
//     if (!response.ok) {
//       throw new Error('Faild to create task');
//     }
//   });

// export const deleteEvent = (taskId) =>
//   fetch(`${baseUrl}/${taskId}`, {
//     method: 'DELETE',
//   }).then((response) => {
//     if (!response.ok) {
//       throw new Error('Faild to delete task');
//     }
//   });

// const events = [
//   {
//     id: 1,
//     title: 'Go to the gym',
//     description: 'some text here',
//     dateFrom: new Date(2022, 8, 15, 10, 15),
//     dateTo: new Date(2022, 8, 15, 15, 0),
//   },
//   {
//     id: 2,
//     title: 'Go to the school',
//     description: 'hello, 2 am',
//     dateFrom: new Date(2022, 8, 16, 10, 15),
//     dateTo: new Date(2022, 8, 16, 11, 0),
//   },
//   {
//     id: 3,
//     title: 'Lunch',
//     description: '',
//     dateFrom: new Date(2022, 8, 17, 10, 30),
//     dateTo: new Date(2022, 8, 17, 11, 30),
//   },
//   {
//     id: 4,
//     title: 'Meet friend',
//     description: 'at the cafe',
//     dateFrom: new Date(2022, 8, 25, 10, 30),
//     dateTo: new Date(2022, 8, 25, 11, 0),
//   },
// ];

// export default events;
