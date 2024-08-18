const { Circle, Triangle, Square } = require('./shapes');

test('Circle renders correctly', () => {
    const shape = new Circle();
    shape.setColor('blue');
    expect(shape.render()).toBe('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="150" cy="100" r="80" fill="blue" /></svg>');
});

test('Triangle renders correctly', () => {
    const shape = new Triangle();
    shape.setColor('red');
    expect(shape.render()).toBe('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="red" /></svg>');
});

test('Square renders correctly', () => {
    const shape = new Square();
    shape.setColor('green');
    expect(shape.render()).toBe('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect x="50" y="50" width="200" height="200" fill="green" /></svg>');
});
