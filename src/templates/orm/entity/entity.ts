import { capitalizeFirstLetter } from "../../../utils";

export function entityTemplate(entityName: string) {
  return `
  import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";


  @Entity({ name: "${entityName.toLowerCase()}" })
  export class ${capitalizeFirstLetter(entityName)} {
    @PrimaryGeneratedColumn("uuid")
    id: String;

    @CreateDateColumn({ update: false })
    created_at: Date;

    @UpdateDateColumn()
    updated_at:Date;

    @Column({
      length: 512,
      nullable: false,
      update: false,
    })
    name: string;
  }
  `;
}
