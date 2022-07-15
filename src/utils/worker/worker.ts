import path from 'path';
import { spawn } from 'child_process';

const worker = (commands: string[], cb?: (data: string) => void ) => {
  return new Promise<string>((resolve, reject) => {
    const _data: string[] = []

    const onData = (data: string) => {
      const stringData = String(data)
      _data.push(data)

      cb && data && cb(stringData)
    }

    const run = (index = 0) => {
      const [command, ...args] = commands[index].split(" ")
      const runner = spawn(command, args, {
        cwd: path.join(process.cwd(), 'keerbe_firmware'),
      });

      runner.stdout.on('data', onData);

      runner.stderr.on('data', onData);

      runner.on('close', (code) => {
        if (code === 0 && index < commands.length - 1) return run(index + 1)
        if (code !== 0) reject(code)
        resolve(_data.join(''))
      });
    }
    run()
  })
}

export default worker
