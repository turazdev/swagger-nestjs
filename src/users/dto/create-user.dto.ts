import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'Paulo Salvatore',
    description: `O nome será utilizado para qualquer coisa (Perfil, Home Page)`,
  })
  name: string;
  @ApiProperty({
    example: 'email@email.com',
    description: `O e-mail é necessário apra o login, mas não necessariamente`,
  })
  email: string;
  /**
    * É possível conectar com redes sociais sem uma senha, mas para login usand
    * é necessário informar uma senha.
    * @example 123@abc
  */
  password?: string;
}
