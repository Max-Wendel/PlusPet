import Api from '../service/PlusPetV1Service';

const AuthProvider = { 

    login:(
        username: string,
        password: string
        ): Promise<string> => {
            let url = '/login';
            return Api.post(url, {username, password}).then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
            
                return response.data;
        });
    },
    logout: () => {
        localStorage.removeItem("user");
        }
};

export default AuthProvider;

