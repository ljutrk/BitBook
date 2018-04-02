import { url } from "../shared/constants";
import { myFetchGet } from "../services/apiService";
import { Profile } from "../entities/Profile";

class ProfileService {

    fetchProfile = () => {
        const api = url.baseUrl + url.profile;
        return myFetchGet(api)
            .then(response => {
                return new Profile(response);
            });
    }
}

export const profileService = new ProfileService();