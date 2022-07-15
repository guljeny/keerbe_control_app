import child_process from 'child_process'

type TCommand = 'scan' | 'upload_layout' | 'get_layout' | 'reset_memory' | 'update' | 'flash'

export default function (cmd: TCommand, args: string[] = [], cb?: (v: string) => void) {
  console.log(args);
  const process = child_process.execFile(`../bin/${cmd}`, args)
  cb && process.stdout?.on('data', (d) => { console.log(d); cb(d) })
  cb && process.stdout?.on('error', (e) => console.log(e))
  cb && process.stdout?.on('stderr', (e) => console.log(e))
  return process
}
