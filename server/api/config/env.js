const env = {
    database: 'bilboards',
    username: 'root',
    password: '',
    dialect: 'mysql',
    host: 'localhost',
    pool: {
        min: 0,
        max: 5,
        acquire: 30000,
        idle: 10000
    }
}