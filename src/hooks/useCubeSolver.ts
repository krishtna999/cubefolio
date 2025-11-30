import { useEffect, useState, useRef } from 'react';
import Cube from 'cubejs';

export interface CubeSolverState {
  solutionMoves: string[];
  isInitialized: boolean;
}

/**
 * Hook to initialize and manage Rubik's Cube solving logic
 * Returns the solution moves split across career stages
 */
export function useCubeSolver(numStages: number) {
  const [state, setState] = useState<CubeSolverState>({
    solutionMoves: [],
    isInitialized: false,
  });
  
  const solverInitialized = useRef(false);

  useEffect(() => {
    if (solverInitialized.current) return;
    solverInitialized.current = true;

    try {
      // Initialize the cube solver
      Cube.initSolver();
      
      // Create a new scrambled cube
      const cube = new Cube();
      cube.randomize();
      
      // Get solution algorithm
      const solution = cube.solve();
      const moves = solution.split(' ').filter((m: string) => m.trim() !== '');
      
      setState({
        solutionMoves: moves,
        isInitialized: true,
      });
    } catch (error) {
      console.error('Failed to initialize cube solver:', error);
      setState({
        solutionMoves: [],
        isInitialized: false,
      });
    }
  }, []);

  return state;
}

/**
 * Utility to get moves for a specific transition
 * @param solutionMoves - Full solution algorithm
 * @param transitionIndex - Which transition (0-indexed, transition from step N to N+1)
 * @param totalTransitions - Total number of transitions
 */
export function getMovesForTransition(
  solutionMoves: string[],
  transitionIndex: number,
  totalTransitions: number
): string[] {
  if (solutionMoves.length === 0 || transitionIndex < 0) return [];
  
  const movesPerTransition = Math.ceil(solutionMoves.length / totalTransitions);
  const startIdx = transitionIndex * movesPerTransition;
  const endIdx = Math.min(startIdx + movesPerTransition, solutionMoves.length);
  
  return solutionMoves.slice(startIdx, endIdx);
}

/**
 * Inverts a Rubik's cube move (for going backwards)
 */
export function invertMove(move: string): string {
  if (move.includes("'")) return move.replace("'", "");
  if (move.includes("2")) return move; // 180° is its own inverse
  return move + "'";
}

/**
 * Inverts an entire sequence of moves
 */
export function invertMoveSequence(moves: string[]): string[] {
  return [...moves].reverse().map(invertMove);
}
