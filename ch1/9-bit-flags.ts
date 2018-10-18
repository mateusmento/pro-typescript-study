enum Mode
{
	f1 = 1, // 0001
	f2 = 2, // 0010
	f3 = 4, // 0100
	f4 = 8, // 1000
}

// flags == 0101
let flags = Mode.f1 | Mode.f3;

// true
(flags & Mode.f1) == Mode.f1;

// 0101 & (0001 | 0100) == 0101
flags & (Mode.f1 | Mode.f3);

// (1000 | 0001 | 0100) & (1000 | 0100 | 0010) == (1000 | 0100)
// 1101 & 1110 == 1100
(Mode.f4 | Mode.f1 | Mode.f3) & (Mode.f4 | Mode.f3 | Mode.f2);

