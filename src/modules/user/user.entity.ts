import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  // BeforeInsert,
  // JoinTable,
  // ManyToMany,
  // OneToMany,
} from 'typeorm';
import { IsEmail } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  @IsEmail()
  email: string;

  @Column({ default: '' })
  bio: string;

  @Column({ default: '' })
  image: string;

  @Column()
  password: string;

  // @BeforeInsert()
  // async hashPassword() {
  //   this.password = await argon2.hash(this.password);
  // }

  // @ManyToMany((type) => ArticleEntity)
  // @JoinTable()
  // favorites: ArticleEntity[];

  // @OneToMany((type) => ArticleEntity, (article) => article.author)
  // articles: ArticleEntity[];
}
