const need = require('../controllers/user_controller');

async function name() {
  console.log(await need.userValidation({user_name: 'hi@hi', password: '1234'},'mylibrary'));
}
name();
