class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    formatDate(originDate) {
        const year = originDate.getFullYear();
        const month = originDate.getMonth() + 1;
        const date = originDate.getDate();

        const result = `${year}-${month >= 10 ? month : '0' + month}-${date >= 10 ? date : '0' + date}`;

        return result
    }

    showProfile(user) {
        const originDate = new Date(user.created_at);
        const date = this.formatDate(originDate);

        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">프로필 이동</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge bg-primary">공개 레포지토리: ${user.public_repos}</span>
                        <span class="badge bg-secondary">공개 Gist: ${user.public_gists}</span>
                        <span class="badge bg-success">팔로워: ${user.followers}</span>
                        <span class="badge bg-info">팔로우: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">직장: ${user.company !== null ? user.company : "없음"}</li>
                            <li class="list-group-item">웹 사이트: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
                            <li class="list-group-item">지역: ${user.location}</li>
                            <li class="list-group-item">가입일: ${date}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">최근 레포지토리</h3>
            <div id="repos"></div>
        `;
    }

    clearProfile() {
        this.profile.innerHTML = "";
    }

    showAlert(message, className) {
        this.clearAlert();

        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        
        container.insertBefore(div, search);

        setTimeout(() => {
            this.clearAlert();
        }, 2000);
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    showRepository(repos) {
        let output = '';

        repos.forEach((repo) => {
            console.log(repo);
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge bg-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge bg-secondary">Watcher: ${repo.watchers_count}</span>
                            <span class="badge bg-success">Fork: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `

            document.getElementById('repos').innerHTML = output;
        })
    }
}