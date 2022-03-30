var DB = require('../../config/db.config');
const Category = (category) => {
    this.code = category.code;
    this.name = category.name;
    this.created_at = category.created_at;
    this.updated_at = category.updated_at;
}


Category.getAllCategories = (result) => {
    const $sql = "SELECT * FROM tim_categories";
    DB.query($sql, (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}



module.exports = Category;