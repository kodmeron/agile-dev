const User = require("./model");

module.exports = class UserService {
    static async createUser(body) {
        if (body) {
          const data = body;
          const user = new User({
            name: data.name,
            age: data.age,
            about: data.about,
            job: data.job,
            location: data.location,
            gender: data.gender,
            lookingFor : data.gender


          });
          await user.save();
          return user;
        } else {
          return { error: "Fields can not be left blank." };
        }
      }
      static showUsers() {
        return User.find();
    }
    static showUser(id){
        return User.findOne({_id: id});
      }
    static async updateUser(id, body){
        try {
          return await User.updateOne({_id: id}, {...body});
      } catch (error) {
          console.log(error);
      }
    }
    static async deleteOneUser(id) {
        try {
            await User.findByIdAndDelete(id)
            return {status: 200}
        } catch (error) {
            return {error: "User could not be found"}
        }
      }
    
};  

