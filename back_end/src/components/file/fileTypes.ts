import { Ro } from "../../appRo";

export interface FileDisk {
  name: string;
  ext: string;
  isDir: boolean;
  link: string;
}

export interface FilesRo extends Ro {
  diskCwd: string;
  files: FileDisk[]
}