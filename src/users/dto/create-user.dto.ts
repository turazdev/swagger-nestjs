import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({
            example: 'Paulo Salvatore',
            description: `O nome será utilizado para qualquer coisa (Perfil, Home Page)`
        })
        name: string;
        @ApiProperty({
            example: 'email@email.com',
            description: `O e-mail é necessário apra o login, mas não necessariamente`
        })
        email: string;
        @ApiProperty({
            example: '123@abc',
            description: `É possível conectar com redes sociais sem uma senha, mas parcialmente`
        })
        password?: string;
}
