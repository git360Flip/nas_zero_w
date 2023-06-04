import { FileDisk, FilesRo } from "./fileTypes";

export function buildFileDisk(filename: string, extension: string, isDirectory: boolean, path: string): FileDisk {
  return {
    name: filename,
    ext: extension,
    isDir: isDirectory,
    link: path,
  }
}

export function buildFilesRo(diskCwd: string, files: FileDisk[]): FilesRo {
  return {
    diskCwd: diskCwd,
    files: files,
  }
}