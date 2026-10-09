import { IsNotEmpty, IsString } from "class-validator";


export class UpdateAuthorDTO{

    @IsString()
    @IsNotEmpty()
    name?: string ;

}