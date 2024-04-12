const Team = require('./team')

test('добавление персонажа в команду', () => {
	const team = new Team()
	team.add('Лучник')
	expect(team.toArray()).toEqual(['Лучник'])
})

test('добавление нескольких персонажей в команду', () => {
	const team = new Team()
	team.addAll('Лучник', 'Мечник', 'Маг')
	expect(team.toArray()).toEqual(['Лучник', 'Мечник', 'Маг'])
})

test('добавление одного и того же персонажа в команду', () => {
	const team = new Team()
	team.add('Лучник')
	expect(() => {
		team.add('Лучник')
	}).toThrow()
})
