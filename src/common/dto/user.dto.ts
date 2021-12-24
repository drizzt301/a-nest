import { ApiProperty } from '@nestjs/swagger';
import { JoinRequestDto } from 'src/users/dto/join.request.dto';

export class UserDto extends JoinRequestDto {
  // @ApiProperty({
  //   example: 'zerohch0@gmail.com',
  //   description: '이메일',
  //   required: true,
  // })
  // email: string;

  @ApiProperty({
    example: 1,
    description: '아이디',
    required: true,
  })
  id: number;
}
