import httpStatus from 'http-status-codes';
import createError from 'http-errors';
import { FilesRo, FileDisk } from "./fileTypes";
import fs from 'fs';
import path from 'path';
import { config } from "../../appConfig";
import { buildFileDisk, buildFilesRo } from './fileHelpers';

function listFilesInDirectory(dir: string | undefined): string[] {
  const fullPath = (dir !== undefined) ? path.join(config.diskRootPath, dir) : path.join(config.diskRootPath);
  try {
    return fs.readdirSync(fullPath);
  } catch (error: any) {
    throw createError(httpStatus.NOT_FOUND, 'No such directory: ' + dir);
  }
}

function checkIfFileIsADirectory(fullPath: string): boolean {
  try {
    return fs.existsSync(fullPath) && fs.lstatSync(fullPath).isDirectory();
  } catch (error: any) {
    throw createError(httpStatus.INTERNAL_SERVER_ERROR, error.toString());
  }
}

function sortFiles(files: string[]): string[] {
  let filesResult: string[] = [];
  if (files.includes(".DS_Store") && config.ignoreDSStoreFiles === true) {
    const index = files.findIndex(value => value === ".DS_Store");
    if (index !== -1) {
      filesResult = files.slice(index + 1);
    } else {
      filesResult = files;
    }
  } else {
    filesResult = files;
  }
  return filesResult.sort();
}

export function getFiles(dir: string | undefined): FilesRo {
  try {
    const filesDisk: FileDisk[] = [];
    const files = listFilesInDirectory(dir);
    const sortedFiles = sortFiles(files);
    sortedFiles.forEach(file => {
      const filePath = (dir !== undefined) ? path.join(config.diskRootPath, dir, file) : path.join(config.diskRootPath, file);
      const fileDisk = buildFileDisk(file, path.extname(file), checkIfFileIsADirectory(filePath), filePath);
      filesDisk.push(fileDisk)
    });
    const diskCwd = (dir !== undefined) ? path.join(config.diskRootPath, dir) : path.join(config.diskRootPath);
    return buildFilesRo(diskCwd, filesDisk);
  } catch (error) {
    throw error
  }
}