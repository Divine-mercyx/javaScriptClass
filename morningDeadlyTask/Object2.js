const student = {
    name: 'john doe',
    age: 22,
    course: ['Math', 'Physics', 'Computer Science'],
    address: {
        city: 'New York',
        zipcode: '10001'
    }
}

student.age = 23
student.GPA = 3.8

const getDetails = () => {
    console.log(`${student.name} is ${student.age} years old and has a GPA of ${student.GPA}`)
}

getDetails()