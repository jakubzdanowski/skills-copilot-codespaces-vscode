function skillsMember() {
    return {
        name: "John Doe",
        age: 30,
        skills: ["JavaScript", "Python", "Java"],
        experience: 5,
        calculateExperience: function() {
            return this.experience * 12; // returns experience in months
        }
    };
}