import color from "chalk";
import readline from "readline";
import { createLogUpdate } from "log-update";
import { erase, cursor } from "sisteransi";

let stdout = process.stdout;
/**
 * @internal Used to mock `process.stdout.write` for testing purposes
 * @param {typeof process.stdout} writable - The writable stream to use
 */
export function setStdout(writable) {
  stdout = writable;
}

/**
 * Sleep for the specified number of milliseconds
 * @param {number} ms - The number of milliseconds to sleep
 * @returns {Promise<void>} A promise that resolves after the specified time
 */
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export { color as c };

/**
 * Create a colored label
 * @param {string} text - The text to display in the label
 * @param {Function} c - The color function to use
 * @param {Function} t - The text color function to use
 * @returns {string} The colored label
 */
export const label = (text, c, t = color.whiteBright) => c(` ${t(text)} `);

/**
 * Log a message to the console
 * @param {string} message - The message to log
 */
export const log = (message) => stdout.write(message + "\n\n");

/**
 * Logger utility for consistent logging across the application
 * @type {Object} logger - Logger object with info, error, success, and warning methods
 * @property {Function} info - Log an info message
 * @property {Function} error - Log an error message
 * @property {Function} success - Log a success message
 * @property {Function} warning - Log a warning message
 */
export const logger = {
  /**
   * Log an info message
   * @param {string} message - The message to log
   */
  info: async (message) => {
    await sleep(100);
    log(`${label("info", color.bgBlue)}  ${message}`);
  },
  /**
   * Log an error message
   * @param {string} message - The message to log
   */
  error: async (message) => {
    await sleep(100);
    log(`${label("error", color.bgRed)}  ${message}`);
  },
  /**
   * Log a warning message
   * @param {string} message - The message to log
   */
  warning: async (message) => {
    await sleep(100);
    log(`${label("warning", color.bgYellow)}  ${message}`);
  },
  /**
   * Log a success message
   * @param {string} message - The message to log
   */
  success: async (message) => {
    await sleep(100);
    log(`${label("success", color.bgGreen)}  ${message}`);
  },
};

/**
 * Gradient color palette used for the animated spinner.
 *
 * Colors are reversed to create the desired animation direction.
 *
 * @type {string[]}
 */
const COLORS = [
  "#883AE3",
  "#7B30E7",
  "#6B22EF",
  "#5711F8",
  "#3640FC",
  "#2387F1",
  "#3DA9A3",
  "#47DA93",
].reverse();

/**
 * Expanded gradient frame sequence used to build the animation.
 *
 * The animation:
 * - fades in
 * - reaches full intensity
 * - fades out
 * - reverses
 *
 * @type {string[]}
 */
const FULL_FRAMES = [
  ...Array.from({ length: COLORS.length - 1 }, () => COLORS[0]),
  ...COLORS,
  ...Array.from({ length: COLORS.length - 1 }, () => COLORS[COLORS.length - 1]),
  ...[...COLORS].reverse(),
];

/**
 * Generates a single gradient animation frame.
 *
 * @param {number} [offset=0] - Starting offset inside the frame sequence.
 * @returns {string[]} Gradient frame colors.
 */
const frame = (offset = 0) => {
  const frames = FULL_FRAMES.slice(offset, offset + (COLORS.length - 2));

  if (frames.length < COLORS.length - 2) {
    const filled = new Array(COLORS.length - frames.length - 2).fill(COLORS[0]);

    frames.push(...filled);
  }

  return frames;
};

/**
 * Precomputed gradient animation frames.
 *
 * Visual representation:
 * gradientColors: "..xxXX"
 * referenceGradient: "..xxXXXXxx....xxXX"
 *
 * @type {string[][]}
 */
const GRADIENT = [...FULL_FRAMES.map((_, i) => frame(i))].reverse();

/**
 * Converts gradient frames into terminal-renderable strings.
 *
 * @returns {string[]} Animated terminal frames.
 */
function getGradientAnimFrames() {
  return GRADIENT.map(
    (colors) => " " + colors.map((g) => color.hex(g)("█")).join(""),
  );
}

/**
 * Creates and starts a gradient-based terminal spinner.
 *
 * Supports:
 * - animated gradient frames
 * - dynamic text updates
 * - Ctrl+C handling
 * - terminal cursor management
 *
 * @param {string} text - Display text shown next to the spinner.
 * @param {object} [options={}] - Spinner configuration.
 * @param {NodeJS.ReadStream} [options.stdin=process.stdin] - Input stream.
 * @param {NodeJS.WriteStream} [options.stdout=process.stdout] - Output stream.
 * @returns {Promise<{
 *   start: () => void,
 *   update: (value: string) => void,
 *   stop: () => void
 * }>} Spinner controller.
 */
async function gradient(
  text,
  { stdin = process.stdin, stdout = process.stdout } = {},
) {
  const logUpdate = createLogUpdate(stdout);

  let i = 0;
  const frames = getGradientAnimFrames();

  /** @type {NodeJS.Timeout | undefined} */
  let interval;

  const rl = readline.createInterface({
    input: stdin,
    escapeCodeTimeout: 50,
  });

  readline.emitKeypressEvents(stdin, rl);

  if (stdin.isTTY) {
    stdin.setRawMode(true);
  }

  /**
   * Handles keyboard input while the spinner is active.
   *
   * @param {string} char - Pressed character.
   */
  const keypress = (char) => {
    if (char === "\x03") {
      spinner.stop();
      process.exit(0);
    }

    if (stdin.isTTY) {
      stdin.setRawMode(true);
    }

    stdout.write(cursor.hide + erase.lines(text.split("\n").length));
  };

  /** @type {() => void} */
  let refresh = () => {};

  let done = false;

  const spinner = {
    /**
     * Starts the spinner animation loop.
     */
    start() {
      stdout.write(cursor.hide);

      stdin.on("keypress", keypress);

      logUpdate(`${frames[0]}  ${text}`);

      const loop = async () => {
        if (done) return;

        if (i < frames.length - 1) {
          i++;
        } else {
          i = 0;
        }

        const currentFrame = frames[i];

        refresh = () => logUpdate(`${currentFrame}  ${text}`);

        refresh();

        if (!done) {
          await sleep(90);
        }

        loop();
      };

      loop();
    },

    /**
     * Updates spinner display text.
     *
     * @param {string} value - New spinner text.
     */
    update(value) {
      text = value;
      refresh();
    },

    /**
     * Stops the spinner and cleans terminal resources.
     */
    stop() {
      done = true;

      stdin.removeListener("keypress", keypress);

      clearInterval(interval);

      logUpdate.clear();

      rl.close();
    },
  };

  spinner.start();

  return spinner;
}

/**
 * Executes an async operation while displaying a spinner.
 *
 * @param {object} task - Spinner task configuration.
 * @param {string} task.start - Initial spinner label.
 * @param {string} task.end - Success message.
 * @param {(error: any) => void} [task.onError] - Optional error handler.
 * @param {(...args: any[]) => Promise<any>} [task.while] - Async operation.
 * @param {object} [options={}] - Stream configuration.
 * @param {NodeJS.ReadStream} [options.stdin=process.stdin] - Input stream.
 * @param {NodeJS.WriteStream} [options.stdout=process.stdout] - Output stream.
 * @returns {Promise<void>}
 */
export async function spinner(
  { start, end, onError, while: update = () => sleep(100) },
  { stdin = process.stdin, stdout = process.stdout } = {},
) {
  const loading = await gradient(start, {
    stdin,
    stdout,
  });

  const action = update();

  const tooSlow = Object.create(null);

  try {
    const result = await Promise.race([sleep(500).then(() => tooSlow), action]);

    if (result === tooSlow) {
      await action;
    }

    stdout.write(`${" ".repeat(5)} ${color.green("✔")}  ${color.green(end)}\n`);
  } catch (error) {
    onError?.(error);
  } finally {
    loading.stop();
  }
}

/**
 * Delay before completed tasks switch from success state
 * to finalized state.
 *
 * @type {number}
 */
const TASK_SUCCESS_FLASH = 750;

/**
 * Left indentation used for task rendering.
 *
 * @type {number}
 */
const TASK_INDENT = 5;

/**
 * Formats a task line depending on its visual state.
 *
 * @param {Task} task - Task definition.
 * @param {'start' | 'end' | 'pending' | 'success'} state - Task state.
 * @returns {string} Formatted terminal output.
 */
function formatTask(task, state) {
  switch (state) {
    case "start":
      return `${" ".repeat(TASK_INDENT + 3)} ${color.cyan(`▶ ${task.start}`)}`;

    case "pending":
      return `${" ".repeat(TASK_INDENT + 3)} ${color.dim(`□ ${task.pending}`)}`;

    case "success":
      return `${" ".repeat(TASK_INDENT + 3)} ${color.green(`✔ ${task.end}`)}`;

    case "end":
      return `${" ".repeat(TASK_INDENT + 3)} ${color.dim(`■ ${task.end}`)}`;
  }
}

/**
 * @typedef {object} Task
 * @property {string} start - Label displayed when the task starts.
 * @property {string} end - Label displayed after completion.
 * @property {string} pending - Label displayed while waiting.
 * @property {(error: any) => void} [onError] - Optional task error handler.
 * @property {(...args: any[]) => Promise<any>} while - Async task operation.
 */

/**
 * Displays and executes a sequential task queue with animated progress.
 *
 * Tasks are executed one after another and are not parallelized.
 *
 * @param {object} labels - Queue labels.
 * @param {string} labels.start - Initial queue label.
 * @param {string} labels.end - Final queue label.
 * @param {Task[]} tasks - Task list.
 * @param {object} [options={}] - Stream configuration.
 * @param {NodeJS.ReadStream} [options.stdin=process.stdin] - Input stream.
 * @param {NodeJS.WriteStream} [options.stdout=process.stdout] - Output stream.
 * @returns {Promise<void>}
 */
export async function tasks(
  { start, end },
  tasks,
  { stdin = process.stdin, stdout = process.stdout } = {},
) {
  /** @type {string[]} */
  const text = Array.from({ length: tasks.length + 1 }, () => "");

  text[0] = start;

  tasks.forEach((task, i) => {
    const state = i === 0 ? "start" : "pending";
    text[i + 1] = formatTask(task, state);
  });

  const loading = await gradient(text.join("\n"), {
    stdin,
    stdout,
  });

  /**
   * Refreshes terminal task rendering.
   */
  const refresh = () => loading.update(text.join("\n"));

  let i = 0;

  /** @type {NodeJS.Timeout[]} */
  const timeouts = [];

  for (const task of tasks) {
    i++;

    text[i] = formatTask(task, "start");

    refresh();

    const action = task.while();

    try {
      await action;

      text[i] = formatTask(task, "success");

      refresh();

      const active = { i, task };

      timeouts.push(
        setTimeout(() => {
          const { i, task } = active;

          text[i] = formatTask(task, "end");

          refresh();
        }, TASK_SUCCESS_FLASH),
      );
    } catch (error) {
      loading.stop();

      task.onError?.(error);
    }
  }

  for (const timeout of timeouts) {
    clearTimeout(timeout);
  }

  await sleep(TASK_SUCCESS_FLASH);

  loading.stop();

  text[0] = `${" ".repeat(TASK_INDENT)} ${color.green("✔")}  ${color.green(end)}`;

  tasks.forEach((task, i) => {
    text[i + 1] = formatTask(task, "end");
  });

  console.log(text.join("\n"));
}
