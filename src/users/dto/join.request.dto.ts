import { PickType } from '@nestjs/swagger';
import { Users } from 'src/entities/Users';

//수동으로 만들어야 함
export class JoinRequestDto extends PickType(Users, [
  'email',
  'nickname',
  'password',
] as const) {}

/*
  @ApiProperty({
    example: 'zerohch0@gmail.com',
    description: '이메일',
    required: true,
  })
  public email: string;
  @ApiProperty({
    example: '제로초',
    description: '닉네임',
    required: true,
  })
  public nickname: string;
  @ApiProperty({
    example: 'nodejsbook',
    description: '비밀번호',
    required: true,
  })
  public password: string;

*/
