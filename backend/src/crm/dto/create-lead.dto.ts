import { IsString, IsOptional, IsEmail, IsNumber } from 'class-validator';

export class CreateLeadDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  company?: string;

  @IsString()
  @IsOptional()
  mobile?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  city?: string;

  @IsString()
  @IsOptional()
  status?: string;

  @IsNumber()
  @IsOptional()
  estimatedValue?: number;
}
