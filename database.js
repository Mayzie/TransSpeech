//import SQLite from 'react-native-sqlite-storage';

export const QUERY_HISTORY = '' +
	'SELECT ' +
	'    h.HistoryID, h.Occurred, he.ExerciseName, he.MinReps, he.CompletedReps' +
	'    FROM' +
	'        History h' +
	'    INNER JOIN' +
	'        HistoryExercises he ON h.HistoryID = he.HistoryID' +
	'    ORDER BY' +
	'        datetime(he.Occurred) DESC;';

export const QUERY_CREATE = '' +
	'CREATE TABLE IF NOT EXISTS History (' +
	'    HistoryID    INTEGER PRIMARY KEY,' +
	'    Occurred     TEXT' +
	');' +
	'' +
	'CREATE TABLE IF NOT EXISTS HistoryExercises (' +
	'    HistoryID     INTEGER,' +
	'    ExerciseName  TEXT,' +
	'    MinReps       INTEGER,' +
	'    CompletedReps INTEGER,' +
	'    FOREIGN KEY (HistoryID) REFERENCES History (HistoryID)' +
	');';

export function openDatabase() {
	let db = SQLite.openDatabase('history.db', '1.0', 'History', null);

	if(db) {
		var result = db.transaction((tx) => {
			return tx.executeSql(QUERY_CREATE);
		});
	}

	getHistory(db);
	return db;
}

export function closeDatabase(db) {
	if(db) {
		db.close();
	}
}

export function getHistory(db) {
	if(db) {
		let history = db.executeSql(QUERY_HISTORY);
		console.warn(history);
	}
}
