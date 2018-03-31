class Profile {
    constructor(profile) {
        this.userId = profile.userId;
        this.name = profile.name;
        this.email = profile.email;
        this.aboutShort = profile.aboutShort;
        this.about = profile.about;
        this.avatarUrl = profile.avatarUrl;
        this.postsCount = profile.postsCount;
        this.commentsCount = profile.commentsCount;
    }
}

export { Profile };