import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [board, setboard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
  ]);
  const mino = [0, 1, 2, 3, 4, 5, 6];

  const movemino = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      downmino(1, 1);
    } else if (event.key === 'Arrowleft') {
      leftmino(1, 1);
    } else if (event.key === 'Arrowright') {
      rightmino(1, 1);
    }
  };

  const downmino = (x: number, y: number) => {
    const newboard = structuredClone(board);
    newboard[y][x] = mino[0];
    newboard[y + 1][x] = mino[1];
    setboard(newboard);
  };

  const leftmino = (x: number, y: number) => {
    const newboard = structuredClone(board);
    newboard[y][x] = mino[0];
    newboard[y][x - 1] = mino[2];
    setboard(newboard);
  };

  const rightmino = (x: number, y: number) => {
    const newboard = structuredClone(board);
    newboard[y][x] = mino[0];
    newboard[y][x + 1] = mino[3];
    setboard(newboard);
  };

  return (
    <div className={styles.container} tabIndex={0} onKeyDown={movemino}>
      <div className={styles.board}>
        <div className={styles.gameboard}>
          {board.map((row: number[], y: number) => (
            <div key={y} className={styles.row}>
              {row.map((cell: number, x: number) => (
                <div key={x} className={styles.cell}>
                  <div
                    className={
                      board[y][x] === 1
                        ? styles.redblock
                        : board[y][x] === 2
                          ? styles.mizuiroblock
                          : board[y][x] === 3
                            ? styles.purpleblock
                            : board[y][x] === 4
                              ? styles.blueblock
                              : board[y][x] === 5
                                ? styles.orangeblock
                                : board[y][x] === 6
                                  ? styles.limeblock
                                  : undefined
                    }
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
