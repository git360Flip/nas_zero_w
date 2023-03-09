import { IsString, Length } from "class-validator";
import { Ro } from "../../appRo";

export class UserLoginDto {
  @IsString()
  @Length(4)
  password!: string;
}

export interface UserRo extends Ro {
  lastLoggedInDate: string;
}