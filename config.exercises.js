const sobPhrases = [
	'Oh no',
	'Only one',
	'Everyone', 
	'Even now',
	'All alone',
	'On my own',
	'On my mind',
	'I\'m leaving',
	'In the rain',
	'Over the moon',
	'Early morning',
	'Incy Wincy Spider',
	'Inkle Inkle Little Star',
]

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

export var exercisesChanged = false;

export function changeExercises() {
	exercisesChanged = !exercisesChanged;
}

export const exercises = [
	{
		position: 0,
		key: 'mhmm',
		title: 'M-hmmm\'s',
		text: 'M-hmmm',
		minReps: 10,
	},
	{
		position: 1,
		key: 'sob',
		title: 'Sobs',
		text: 'ng (sob)',
		minReps: 10,
	},
	{
		position: 2,
		key: 'sob-phrase',
		title: 'Sob Phrases',
		text: [],
		onNext: (textArray) => {
			textArray.shift();

			// ToDo: Store new array.
			// ToDo: Put onEmpty in here.
		},
		onEmpty: () => {
			// ToDo: Store new array.

			let newArray = sobPhrases.slice();
			shuffle(newArray);
			return newArray;
		},
		minReps: 4,
	},
	{
		position: 3,
		key: 'siren',
		title: 'Sirens',
		text: 'Siren',
		minReps: 4,
	},
	{
		position: 4,
		key: 'siren-asc',
		title: 'Sirens (Ascending)',
		text: 'Siren (Ascending)',
		minReps: 4,
	},
	{
		position: 5,
		key: 'siren-desc',
		title: 'Sirens (Descending)',
		text: 'Siren (Descending)',
		minReps: 4,
	},
];

