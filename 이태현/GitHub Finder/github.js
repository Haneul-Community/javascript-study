const token = new Token;

class GitHub {
    constructor() {
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }

    async getUser(user) {
        console.log(token.authToken)

        const profileResponse = await fetch(
            `https://api.github.com/users/${user}`, {
            headers: {
                "Authorization": `token ${token.authToken}`
            }
        });
        const repositoryResponse = await fetch(
            `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`, {
            headers: {
                "Authorization": `token ${token.authToken}`
            }
        });

        const profile = await profileResponse.json();
        const repos = await repositoryResponse.json();

        return { profile, repos }
    }
}