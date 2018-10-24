export enum Mode
{
	F1, F2
}

let mode: Mode = Mode.F1;
mode++;
mode++; // mode == 2, out of the enum bounds

