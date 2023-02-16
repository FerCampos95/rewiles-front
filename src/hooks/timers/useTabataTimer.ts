import { useState, useEffect } from 'react';
import useBeep from '../utils/useBeep';

interface ITabataTimerState {
  time: number;
  rest: number;
  rounds: number;
  startTimer: () => void;
  pauseTimer: () => void;
  restartTimer: () => void
}

const DEFAULT_TABATA = {
	time: 20,
	rest: 10,
	rounds: 8,
};

interface ITabata {
  time: number;
  rest: number;
  rounds: number;
}

const useTabataTimer = (props?: ITabata): ITabataTimerState => {
	const { playBeep } = useBeep();
	const userTabata = props || DEFAULT_TABATA;
	const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
	const [tabata, setTabata] = useState<ITabata>(userTabata);

	useEffect(() => {
		if (intervalId) {
			const { time, rest, rounds } = tabata;
			if (time === 0 && rest === 0 && rounds === 0) {
				clearInterval(intervalId);
				setTabata(userTabata);
				return;
			}
		}
	}, [tabata, intervalId]);

	const pauseTimer = () => {
		if(intervalId) {
			clearInterval(intervalId);
			setIntervalId(null);
		}
	};

	const restartTimer = () => {
		setTabata(userTabata);
	};

	const startTimer = () => {
		if (intervalId) return;

		const id = setInterval(() => {
			setTabata(prevTabata => {
				const { time, rest, rounds } = prevTabata;
				if (time > 0) {
					const newTime = time - 1;
					playBeep(newTime < 3);
					return {
						...prevTabata,
						time: newTime
					};
				} else if (time === 0 && rest > 0) {
					const newRest = rest - 1;
					playBeep(newRest < 3);
					return ({
						...prevTabata,
						rest: newRest
					});
				} else {
					return ({
						time: userTabata.time,
						rest: userTabata.rest,
						rounds: rounds - 1
					});
				}
			});
		}, 1000);

		setIntervalId(id);
	};

	return { ...tabata, startTimer, pauseTimer, restartTimer };
};

export default useTabataTimer;
