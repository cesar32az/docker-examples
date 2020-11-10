import app from "./app";
import './database'
const main = () => {
  try {
    app.listen(app.get('port'));
    console.log("app on port", app.get('port'));
  } catch (error) {
    console.log(error);
  }
};
main();
