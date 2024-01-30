// So the reduce function can also be used to group objects by property

people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
  ];
  
  function groupBy(objectArray, property) {
    return objectArray.reduce((acc, obj) => {
      const key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }
  
  const groupedPeople = groupBy(people, 'age');
  console.log(groupedPeople);

// so the reduce function was used
// to group the names by age