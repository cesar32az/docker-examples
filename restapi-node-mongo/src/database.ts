import { connect, ConnectionOptions } from "mongoose";
import config from './config/config'

const options: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
};
const uri:string = `mongodb://${config.MONGODB_HOST}/${config.MONGODB_DATABASE}`;

(async () => {
  try {
    await connect(uri, options);
    console.log("db is connected");
  } catch (error) {
    console.log(error);
  }
})();

