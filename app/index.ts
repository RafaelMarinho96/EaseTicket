import Database from './Database/index';
import App from './Config/App';
import customEnv from 'custom-env';
customEnv.env(true);

const url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds119085.mlab.com:19085/maapp`;
const db = new Database(url);

db.connect()
    .then(() => {
        App.listen(3333, () => {
            console.log('Server running');
        });
    })
    .catch(() => {
        db.close();
    });
