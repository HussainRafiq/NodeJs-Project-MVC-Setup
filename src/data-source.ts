import { DataSource, DataSourceOptions, DbStatsOptions } from "typeorm";
import { Product } from "./entities/product.entity";
import { Configuration } from "./utils/configuration";
var configuration = new Configuration();


var dbConfiguration=configuration.GetSection("DBConfiguration")?.Value;
const AppDBSource = new DataSource(dbConfiguration as DataSourceOptions);
export default AppDBSource;