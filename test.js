const meals = [
  { _id: 6, name: 'Steak', date: '2020-04-05T00:00:00.000Z' },
  { _id: 5, name: 'Fish', date: '2020-04-05T00:00:00.000Z' },
  { _id: 4, name: 'Salad', date: '2020-04-03T00:00:00.000Z' },
  { _id: 3, name: 'Veggies', date: '2020-04-03T00:00:00.000Z' },
  { _id: 2, name: 'Cup Noodles', date: '2020-04-01T00:00:00.000Z' },
  { _id: 1, name: 'Bowl Noodles', date: '2020-04-01T00:00:00.000Z' },
];


// Final Format
const mealsByDay = [
    {
        '2020-04-05': [[{_id: 6, name: "Steak"}], [{_id: 5, name: "Fish"}]]
    },
    {
        '2020-04-03': [[{_id: 4, name: "Salad"}], [{_id: 3, name: "Veggies"}]]
    },
    {
        '2020-04-01': [[{_id: 2, name: "Cup Noodles"}], [{_id: 1, name: "Bowl Noodles"}]]
    }
  ]



