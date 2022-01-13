const Employee = require("../lib/Employee")


test("Instantiate Employee object", () => {
    const x = new Employee();
    expect(typeof(x)).toBe('object')
});

test("can create new ID", () => {

    const newID = 1;
    const x = new Employee(newID);
    expect(x.getId()).toBe(newID)
})

test("can create new name", () => {

    const newName = "dave";
    const x = new Employee(1, newName);
    expect(x.getName()).toBe(newName)
})

test("can choose avatar", () => {

    const newAvatar = "male";
    const x = new Employee(1, 'dave', newAvatar);
    expect(x.getAvatar()).toBe(newAvatar)
})


test("can create new email", () => {

    const newEmail = "new.email@team.com";
    const x = new Employee(1, 'dave', 'male', newEmail);
    expect(x.getEmail()).toBe(newEmail)
})

test("able to getRole() and return \"Employee\" ", () => {

    const newEmployee = "Employee";
    const x = new Employee(1, 'dave', 'male', "new.email@team.com", newEmployee);
    expect(x.getRole()).toBe(newEmployee)
})

