import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "mssql",
  host: "localhost",
  port: 1433,
  username: "sa",
  password: "test1234",
  database: "testdb",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [], 
  options: { encrypt: false },
  extra: {
    trustServerCertificate: false,
    // encrypt: false,
  },
});
